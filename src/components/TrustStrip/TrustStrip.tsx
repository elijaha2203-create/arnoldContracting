import { trustStats, credentials } from '../../data/content';
import { CheckIcon } from '../icons';
import { useReveal } from '../../hooks/useReveal';
import './TrustStrip.css';

export function TrustStrip() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section className="trust-strip" aria-label="Why homeowners choose us">
      <div ref={ref} className={`trust-strip__inner ${className}`}>
        <ul className="trust-strip__stats">
          {trustStats.map((stat) => (
            <li key={stat.label}>
              <span className="trust-strip__value">{stat.value}</span>
              <span className="trust-strip__label">{stat.label}</span>
            </li>
          ))}
        </ul>

        <ul className="trust-strip__credentials">
          {credentials.map((item) => (
            <li key={item.label}>
              <CheckIcon className="trust-strip__check" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
