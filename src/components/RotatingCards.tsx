import { useEffect, useRef, useState, type ReactNode } from "react";

export type RotatingCardItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type Props = {
  items: RotatingCardItem[];
  radius?: number;
};

/**
 * 3D circular carousel with draggable rotating cards.
 * Drag horizontally (mouse or touch) to spin the ring; it auto-rotates when idle.
 */
export function RotatingCards({ items, radius = 320 }: Props) {
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{ x: number; start: number } | null>(null);
  const velocity = useRef(0);
  const step = 360 / items.length;

  useEffect(() => {
    let frame: number;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!dragging) {
        velocity.current *= 0.94;
        setAngle((a) => a + velocity.current * dt + 6 * dt);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [dragging]);

  const onDown = (x: number) => {
    dragRef.current = { x, start: angle };
    velocity.current = 0;
    setDragging(true);
  };
  const onMove = (x: number) => {
    if (!dragRef.current) return;
    const delta = (x - dragRef.current.x) * 0.35;
    velocity.current = delta * 4;
    setAngle(dragRef.current.start + delta);
  };
  const onUp = () => {
    dragRef.current = null;
    setDragging(false);
  };

  return (
    <div
      className="relative h-[420px] w-full select-none [perspective:1400px]"
      onMouseDown={(e) => onDown(e.clientX)}
      onMouseMove={(e) => dragging && onMove(e.clientX)}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={(e) => onDown(e.touches[0].clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={onUp}
      style={{ cursor: dragging ? "grabbing" : "grab" }}
      aria-label="Facilities carousel — drag to rotate"
    >
      <div
        className="absolute left-1/2 top-1/2 h-0 w-0 [transform-style:preserve-3d]"
        style={{ transform: `translate(-50%,-50%) rotateX(-8deg) rotateY(${angle}deg)` }}
      >
        {items.map((item, i) => {
          const theta = i * step;
          return (
            <article
              key={item.title}
              className="absolute -left-[130px] -top-[150px] flex h-[300px] w-[260px] flex-col justify-between rounded-2xl border border-primary/15 bg-card p-6 shadow-card"
              style={{ transform: `rotateY(${theta}deg) translateZ(${radius}px)` }}
            >
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-brand text-2xl text-primary-foreground shadow-glow">
                {item.icon}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
