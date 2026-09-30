import { useEffect, useRef, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import "./rocket-launch.css";

const DURATION = 3600;
const REVEAL_START = 1200;
const REVEAL_END = 2200;

const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
const easeInQuad = (t) => t * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const smoothstep = (min, max, val) => {
  const x = clamp((val - min) / (max - min), 0, 1);
  return x * x * (3 - 2 * x);
};

const rocketBody = new Path2D(
  "M0 -54 C-23 -44 -29 -12 -30 8 L-42 25 Q-46 30 -46 40 L-46 56 Q-46 64 -40 60 L-20 40 Q0 50 20 40 L40 60 Q46 64 46 56 L46 40 Q46 30 42 25 L30 8 C29 -12 23 -44 0 -54 Z"
);

function renderRocketScene(ctx, width, height, time) {
  ctx.clearRect(0, 0, width, height);
  if (time >= DURATION) return;

  const centerX = width / 2;
  const groundY = height - Math.min(80, height * 0.15);
  const scale = width < 600 ? 0.52 : 0.68;
  const launchpadWidth = width < 600 ? 80 : 110;

  // Launch timing
  const ignitionProgress = clamp(time / 450, 0, 1);
  const flightProgress = Math.max(0, (time - 450) / 1100);
  const flightDistance = easeInQuad(flightProgress) * (height + 250);
  const rocketY = groundY - 60 * scale - flightDistance;

  ctx.save();

  // Draw ground launchpad during early launch
  const padFade = 1 - smoothstep(1200, 2400, time);
  if (padFade > 0) {
    ctx.save();
    ctx.globalAlpha = padFade;
    ctx.strokeStyle = "#899881";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX - launchpadWidth, groundY + 10);
    ctx.lineTo(centerX + launchpadWidth, groundY + 10);
    ctx.stroke();

    ctx.fillStyle = "#a9bba0";
    ctx.fillRect(centerX - launchpadWidth * 0.45, groundY + 4, launchpadWidth * 0.9, 6);
    ctx.restore();
  }

  // Draw vertical speed lines during flight
  if (flightProgress > 0 && flightProgress < 1.6) {
    ctx.save();
    ctx.strokeStyle = "#8fa383";
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = clamp(1.4 - flightProgress * 0.9, 0, 0.7);
    for (let i = 0; i < 6; i++) {
      const offset = (i % 2 === 0 ? 1 : -1) * (35 + i * 22);
      const lineY = ((time * 1.8 + i * 140) % height);
      ctx.beginPath();
      ctx.moveTo(centerX + offset, lineY);
      ctx.lineTo(centerX + offset, lineY + 40 + i * 10);
      ctx.stroke();
    }
    ctx.restore();
  }

  // Draw smoke trail
  const smokeFade = 1 - smoothstep(1600, DURATION, time);
  if (ignitionProgress > 0 && smokeFade > 0) {
    ctx.save();
    const puffCount = 28;
    for (let i = 0; i < puffCount; i++) {
      const birthTime = 300 + i * 50;
      if (time < birthTime) continue;
      const age = (time - birthTime) / 1000;
      const progressFraction = i / puffCount;
      const trailY = groundY - progressFraction * flightDistance * 0.9;
      if (trailY < -60 || trailY > height + 40) continue;

      const spread = (Math.sin(i * 1.3) * 24 + Math.cos(i * 0.7) * 16) * (1 + age * 0.6);
      const radius = (width < 600 ? 14 : 20) * (0.6 + age * 0.7);
      const alpha = smokeFade * clamp(1.2 - age * 0.6, 0, 0.85);

      ctx.globalAlpha = alpha;
      ctx.fillStyle = i % 2 === 0 ? "#ccd6c5" : "#b8c9af";
      ctx.beginPath();
      ctx.arc(centerX + spread, trailY - age * 12, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  // Draw rocket if still within viewport
  if (rocketY > -140) {
    ctx.save();
    const jitter = time < 550 ? (Math.sin(time * 0.15) * 1.8 * ignitionProgress) : 0;
    ctx.translate(centerX + jitter, rocketY);
    ctx.scale(scale, scale);

    // Thruster flame
    if (ignitionProgress > 0) {
      const flameLength = 50 + Math.sin(time * 0.08) * 16 + flightProgress * 30;
      ctx.fillStyle = "#e78770";
      ctx.beginPath();
      ctx.moveTo(-16, 44);
      ctx.quadraticCurveTo(-22, 60 + flameLength * 0.5, 0, 44 + flameLength);
      ctx.quadraticCurveTo(22, 60 + flameLength * 0.5, 16, 44);
      ctx.fill();

      ctx.fillStyle = "#f3dd9b";
      ctx.beginPath();
      ctx.moveTo(-8, 44);
      ctx.quadraticCurveTo(-10, 52 + flameLength * 0.3, 0, 44 + flameLength * 0.6);
      ctx.quadraticCurveTo(10, 52 + flameLength * 0.3, 8, 44);
      ctx.fill();
    }

    // Rocket body
    ctx.fillStyle = "#1b211d";
    ctx.fill(rocketBody);

    // Cabin window
    ctx.fillStyle = "#c5d6ad";
    ctx.beginPath();
    ctx.ellipse(0, -12, 11, 15, 0, 0, Math.PI * 2);
    ctx.fill();

    // Window reflection
    ctx.fillStyle = "#ffffff";
    ctx.globalAlpha = 0.75;
    ctx.beginPath();
    ctx.ellipse(-3, -16, 3, 6, 0.25, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  ctx.restore();
}

export default function RocketLaunch() {
  const host = useRef(null);
  const canvas = useRef(null);
  const content = useRef(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const card = host.current;
    if (!card) return;

    const ctx = canvas.current?.getContext("2d");
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    let elapsed = 0;
    let previousTime = null;
    let animationFrameId = 0;
    let isVisible = false;
    let hasPlayed = false;
    let width = 0;
    let height = 0;

    const render = () => {
      if (ctx && width > 0 && height > 0) {
        renderRocketScene(ctx, width, height, elapsed);
      }
      const revealProgress = easeOutCubic(smoothstep(REVEAL_START, REVEAL_END, elapsed));
      if (content.current) {
        content.current.style.opacity = String(revealProgress);
        content.current.style.transform = `translateY(${(1 - revealProgress) * 20}px)`;
      }
      if (elapsed >= REVEAL_START && !contentVisible) {
        setContentVisible(true);
      }
    };

    const tick = (now) => {
      if (previousTime !== null) {
        elapsed = Math.min(DURATION, elapsed + (now - previousTime));
      }
      previousTime = now;
      render();

      if (elapsed < DURATION) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        animationFrameId = 0;
      }
    };

    const sync = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = 0;
      previousTime = null;

      if (media.matches) {
        elapsed = DURATION;
        render();
        return;
      }

      if (isVisible && !document.hidden && elapsed < DURATION) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      width = card.clientWidth;
      height = card.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.current) {
        canvas.current.width = Math.round(width * dpr);
        canvas.current.height = Math.round(height * dpr);
        ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      render();
    });
    resizeObserver.observe(card);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) hasPlayed = true;
        sync();
      },
      { threshold: 0.1 }
    );
    intersectionObserver.observe(card);

    const onVisibilityChange = () => sync();
    document.addEventListener("visibilitychange", onVisibilityChange);

    const onMediaChange = () => {
      if (media.matches) {
        elapsed = DURATION;
      }
      render();
      sync();
    };
    media.addEventListener("change", onMediaChange);

    if (media.matches) {
      elapsed = DURATION;
    }
    render();
    sync();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      media.removeEventListener("change", onMediaChange);
    };
  }, []);

  return (
    <div ref={host} className="blast-card">
      <canvas ref={canvas} className="blast-canvas" aria-hidden="true" />
      <div
        ref={content}
        className="blast-content"
        inert={!contentVisible}
        aria-hidden={!contentVisible}
      >
        <h2 className="blast-title">
          Ready to blast <em>your idea?</em>
        </h2>
        <a
          className="blast-contact-btn"
          href="mailto:rafafazli7@gmail.com"
          aria-label="Contact me at rafafazli7@gmail.com"
        >
          <span>Contact me</span>
          <LuArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
