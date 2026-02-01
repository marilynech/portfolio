"use client";

import { useEffect, useRef } from "react";

type Star = {
  // world position in CSS pixels
  x: number;
  y: number;
  // velocity in CSS pixels / second
  vx: number;
  vy: number;
  // size in CSS pixels
  r: number;
  // base alpha + twinkle
  a: number;
  tw: number;
  // 0=white, 1=accent tint, 2=moon tint
  palette: 0 | 1 | 2;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createStars(width: number, height: number) {
  // density tuned to feel “night sky” without looking noisy
  const area = width * height;
  const count = clamp(Math.round(area / 9000), 120, 520);

  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    const layer = Math.random();
    const isFar = layer < 0.55;
    const isMid = layer >= 0.55 && layer < 0.88;

    const r = isFar ? randomBetween(0.6, 1.2) : isMid ? randomBetween(0.9, 1.7) : randomBetween(1.4, 2.6);
    const speed = isFar ? randomBetween(2, 8) : isMid ? randomBetween(8, 18) : randomBetween(16, 32);
    const angle = randomBetween(-Math.PI, Math.PI);

    // Most stars are white, some pick up accent/moon warmth.
    const paletteRoll = Math.random();
    const palette: Star["palette"] = paletteRoll < 0.82 ? 0 : paletteRoll < 0.93 ? 1 : 2;

    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r,
      a: isFar ? randomBetween(0.25, 0.55) : isMid ? randomBetween(0.35, 0.75) : randomBetween(0.45, 0.9),
      tw: randomBetween(0.6, 1.8),
      palette,
    });
  }

  return stars;
}

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const lastTsRef = useRef<number>(0);
  const reducedMotionRef = useRef<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const updateReduced = () => {
      reducedMotionRef.current = !!mql?.matches;
    };
    updateReduced();
    mql?.addEventListener?.("change", updateReduced);

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsRef.current = createStars(w, h);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const getPalette = () => {
      const styles = getComputedStyle(document.documentElement);
      const accent = styles.getPropertyValue("--accent").trim() || "#559fd6";
      const moon = styles.getPropertyValue("--moon").trim() || "#f3df92";
      return { accent, moon };
    };
    let cachedPalette = getPalette();

    const draw = (ts: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (!w || !h) return;

      const dt = lastTsRef.current ? (ts - lastTsRef.current) / 1000 : 0;
      lastTsRef.current = ts;

      // In case theme variables change (rare), re-read occasionally.
      if (ts % 2000 < 16) cachedPalette = getPalette();

      ctx.clearRect(0, 0, w, h);

      for (const s of starsRef.current) {
        if (!reducedMotionRef.current && dt > 0) {
          s.x += s.vx * dt;
          s.y += s.vy * dt;

          // wrap around edges
          if (s.x < -10) s.x = w + 10;
          if (s.x > w + 10) s.x = -10;
          if (s.y < -10) s.y = h + 10;
          if (s.y > h + 10) s.y = -10;
        }

        const twinkle = 0.18 * Math.sin(ts / 1000 / s.tw + s.x * 0.01);
        const alpha = clamp(s.a + twinkle, 0.08, 1);

        let color = `rgba(255,255,255,${alpha})`;
        if (s.palette === 1) {
          // accent tint
          color = `${cachedPalette.accent}`;
        } else if (s.palette === 2) {
          // moon tint
          color = `${cachedPalette.moon}`;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = s.palette === 0 ? color : color;
        ctx.globalAlpha = s.palette === 0 ? 1 : alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      if (!reducedMotionRef.current) {
        rafRef.current = window.requestAnimationFrame(draw);
      }
    };

    // Reduced-motion: draw a single frame.
    rafRef.current = window.requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      mql?.removeEventListener?.("change", updateReduced);
    };
  }, []);

  return (
    <div aria-hidden="true" className="starry-bg pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="starry-bg__canvas" />
      <div className="starry-bg__moon" />
    </div>
  );
}
