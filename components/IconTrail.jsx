import { useEffect, useRef } from 'react';

const MATHS = ['∑', 'π', '√', '∫', '×', '÷', '∞', 'θ', 'Δ', 'µ', 'f(x)', '≈'];
const ROBOTS = ['smart_toy', 'precision_manufacturing', 'memory', 'bolt', 'settings_suggest', 'build', 'rocket_launch', 'cable'];
const COLORS = ['#3f6267', '#87466b', '#5e6e45', '#a45e85'];

function spawnIcon(layer, x, y) {
  const robot = Math.random() < 0.45;
  const el = document.createElement('span');
  const color = COLORS[(Math.random() * COLORS.length) | 0];
  const size = robot ? (22 + Math.random() * 12) : (20 + Math.random() * 16);

  if (robot) {
    el.textContent = ROBOTS[(Math.random() * ROBOTS.length) | 0];
    el.style.fontFamily = "'Material Symbols Outlined'";
  } else {
    el.textContent = MATHS[(Math.random() * MATHS.length) | 0];
    el.style.fontFamily = "'Space Mono', monospace";
    el.style.fontWeight = '700';
  }

  el.style.cssText += `position:absolute;left:${x}px;top:${y}px;color:${color};font-size:${size}px;transform:translate(-50%,-50%);will-change:transform,opacity;user-select:none;pointer-events:none;`;
  layer.appendChild(el);

  const driftX = (Math.random() - 0.5) * 60;
  const rot = (Math.random() - 0.5) * 80;
  const anim = el.animate([
    { transform: 'translate(-50%,-50%) scale(.4) rotate(0deg)', opacity: 0 },
    { transform: `translate(calc(-50% + ${driftX * 0.4}px),-70%) scale(1) rotate(${rot * 0.4}deg)`, opacity: 1, offset: 0.18 },
    { transform: `translate(calc(-50% + ${driftX}px),-150%) scale(.85) rotate(${rot}deg)`, opacity: 0 },
  ], { duration: 1100 + Math.random() * 500, easing: 'cubic-bezier(.2,.7,.3,1)' });

  anim.onfinish = () => el.remove();
}

export default function IconTrail({ pauseSelector }) {
  const lastRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const layer = document.createElement('div');
    layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:60;overflow:hidden;';
    document.body.appendChild(layer);

    const onMove = (e) => {
      if (pauseSelector && e.target.closest && e.target.closest(pauseSelector)) {
        lastRef.current = null;
        return;
      }
      if (lastRef.current) {
        const dx = e.clientX - lastRef.current.x;
        const dy = e.clientY - lastRef.current.y;
        if (dx * dx + dy * dy < 42 * 42) return;
      }
      lastRef.current = { x: e.clientX, y: e.clientY };
      spawnIcon(layer, e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      layer.remove();
    };
  }, [pauseSelector]);

  return null;
}
