import type { ReactNode } from 'react';
import { trustStats, credentials } from '../../data/content';
import { CheckIcon } from '../icons';
import { useReveal } from '../../hooks/useReveal';
import './TrustStrip.css';

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Why homeowners choose us">
      <div className="trust-strip__inner">
        <ul className="trust-strip__stats">
          {trustStats.map((stat, index) => (
            <TrustItem key={stat.label} delay={index * 100}>
              <span className="trust-strip__value">{stat.value}</span>
              <span className="trust-strip__label">{stat.label}</span>
            </TrustItem>
          ))}
        </ul>

        <ul className="trust-strip__credentials">
          {credentials.map((item, index) => (
            <TrustItem key={item.label} delay={index * 100 + 300}>
              <CheckIcon className="trust-strip__check" />
              <span>{item.label}</span>
            </TrustItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TrustItem({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) {
  const { ref, className, style } = useReveal<HTMLLIElement>({ delay });

  return (
    <li ref={ref} className={className} style={style}>
      {children}
    </li>
  );
}
