import { useEffect, useRef } from "react";

export function ConfettiBurst() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const colors = ["#FFD700", "#00D4FF", "#FFA500", "#ffffff"];
    const pieces: HTMLSpanElement[] = [];
    for (let i = 0; i < 80; i++) {
      const s = document.createElement("span");
      s.style.position = "absolute";
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `-20px`;
      s.style.width = `${6 + Math.random() * 8}px`;
      s.style.height = `${10 + Math.random() * 8}px`;
      s.style.background = colors[i % colors.length];
      s.style.opacity = "0.9";
      s.style.borderRadius = "2px";
      s.style.animation = `confetti-fall ${2 + Math.random() * 2.5}s ease-in ${Math.random() * 0.6}s forwards`;
      el.appendChild(s);
      pieces.push(s);
    }
    const timeout = setTimeout(() => {
      pieces.forEach((p) => p.remove());
    }, 5000);
    return () => {
      clearTimeout(timeout);
      pieces.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden
    />
  );
}
