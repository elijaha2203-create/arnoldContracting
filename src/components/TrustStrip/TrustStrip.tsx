import type { ReactNode } from 'react';
import { trustStats, credentials } from '../../data/content';
import { CheckIcon } from '../icons';
import { useReveal } from '../../hooks/useReveal';
import './TrustStrip.css';

export function TrustStrip() {
<<<<<<< HEAD
  const { ref: statsRef, className: statsClassName } = useReveal<HTMLUListElement>();
  const { ref: credsRef, className: credsClassName } = useReveal<HTMLUListElement>();

  return (
    <section className="trust-strip" aria-label="Why homeowners choose us">
      <div className="trust-strip__inner">
        <ul ref={statsRef} className={`trust-strip__stats ${statsClassName}`}>
          {trustStats.map((stat) => (
            <li key={stat.label}>
=======
  return (
    <section className="trust-strip" aria-label="Why homeowners choose us">
      <div className="trust-strip__inner">
        <ul className="trust-strip__stats">
          {trustStats.map((stat, index) => (
            <TrustItem key={stat.label} delay={index * 100}>
>>>>>>> 5c43364fafc42c60721fa8e8ede3364e911c2f7b
              <span className="trust-strip__value">{stat.value}</span>
              <span className="trust-strip__label">{stat.label}</span>
            </TrustItem>
          ))}
        </ul>

<<<<<<< HEAD
        <ul ref={credsRef} className={`trust-strip__credentials ${credsClassName}`}>
          {credentials.map((item) => (
            <li key={item.label}>
=======
        <ul className="trust-strip__credentials">
          {credentials.map((item, index) => (
            <TrustItem key={item.label} delay={index * 100 + 300}>
>>>>>>> 5c43364fafc42c60721fa8e8ede3364e911c2f7b
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
