import { useId, useState } from 'react';
import { LuArrowDownRight, LuMousePointer2 } from 'react-icons/lu';
import Keycap from './Keycap.jsx';
import { techStack } from './tech-stack-data.js';
import './tech-stack.css';

/**
 * Drop-in section: <TechStack id="tools" items={techStack} />.
 * Load src/tailwind.css once in the host app; the keycap styles are imported here.
 * Items use unique names and { name, category, icon, color, depth, ink } fields.
 * Hover, focus, or tap inspects a tool; keyboard and reduced motion are supported.
 */
export default function TechStack({ id = 'tools', items = techStack }) {
  const titleId = useId();
  const [inspected, setInspected] = useState(null);
  const current = items.find((item) => item.name === inspected?.name) ?? items[0];
  const CurrentIcon = current?.icon;

  return (
    <section id={id} className="tech-stack relative isolate overflow-hidden" aria-labelledby={titleId}>
      <header className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="stack-eyebrow mt-0 mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
            <span className="stack-status-dot" aria-hidden="true" />
            02 / MY STACK
          </p>
          <h2 id={titleId} className="stack-title">Tools I work with.</h2>
        </div>
        <p className="stack-subtitle max-w-[240px] text-sm leading-relaxed md:pb-1">
          From design to development and deployment.
        </p>
      </header>

      <div className="stack-stage relative">
        <div className="stack-orbit" aria-hidden="true" />
        <div className="stack-keyboard">
          <ul className="stack-keys" aria-label="Technology stack">
            {items.map((item) => (
              <li key={item.name}>
                <Keycap item={item} onInspect={setInspected} />
              </li>
            ))}
          </ul>
        </div>
        <p className="stack-hint flex items-center gap-2 font-mono text-[11px] tracking-wide">
          <LuMousePointer2 aria-hidden="true" className="text-sm" />
          <span className="stack-hover-hint">Hover to press</span>
          <span className="stack-touch-hint">Tap to press</span>
          <LuArrowDownRight aria-hidden="true" className="ml-1 text-base" />
        </p>
      </div>

      <footer className="stack-footer relative flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-4" aria-live="polite" aria-atomic="true">
          {CurrentIcon && <CurrentIcon className="stack-current-icon shrink-0 text-2xl" style={{ color: current.color }} aria-hidden="true" />}
          <div>
            <p className="m-0 text-sm font-semibold text-[#eeeae3]">{current?.name ?? 'Tech stack'}</p>
            <p className="stack-description mt-1 text-xs leading-relaxed">{current?.category ?? 'Tools for building digital experiences'}</p>
          </div>
        </div>
        <p className="stack-count flex shrink-0 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em]">
          <span>{String(items.length).padStart(2, '0')} tools</span>
          <span aria-hidden="true">/</span>
          <span>Always exploring</span>
        </p>
      </footer>
    </section>
  );
}
