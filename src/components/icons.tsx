type IconProps = {
  className?: string;
};

/** Hand-rolled line icons, 24x24 viewBox, 1.75 stroke — one consistent set for the whole site. */

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 7.5 7.5 0 0 0 2.36.38 1 1 0 0 1 1 1V19.9a1 1 0 0 1-1 1A15.9 15.9 0 0 1 3.1 4.9a1 1 0 0 1 1-1H6.7a1 1 0 0 1 1 1 7.5 7.5 0 0 0 .38 2.36 1 1 0 0 1-.25 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.25" y="5.5" width="17.5" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 13 4.5 4.5L19.5 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.6 6.2c-2.6.9-4.1 3-4.1 6 0 2.4 1.4 4 3.4 4 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-2.9.2-1.5 1.1-2.7 2.6-3.3L8.6 6.2Zm8.4 0c-2.6.9-4.1 3-4.1 6 0 2.4 1.4 4 3.4 4 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-2.9.2-1.5 1.1-2.7 2.6-3.3L17 6.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
