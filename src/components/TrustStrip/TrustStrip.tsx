import { trustStats, credentials } from '../../data/content';
import { CheckIcon } from '../icons';
import { useReveal } from '../../hooks/useReveal';
import './TrustStrip.css';

export function TrustStrip() {
  const { ref: statsRef, className: statsClassName } = useReveal<HTMLUListElement>();
  const { ref: credsRef, className: credsClassName } = useReveal<HTMLUListElement>();

  return (
    <section className="trust-strip" aria-label="Why homeowners choose us">
      <div className="trust-strip__inner">
        <ul ref={statsRef} className={`trust-strip__stats ${statsClassName}`}>
          {trustStats.map((stat) => (
            <li key={stat.label}>
              <span className="trust-strip__value">{stat.value}</span>
              <span className="trust-strip__label">{stat.label}</span>
            </li>
          ))}
        </ul>

        <ul ref={credsRef} className={`trust-strip__credentials ${credsClassName}`}>
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
