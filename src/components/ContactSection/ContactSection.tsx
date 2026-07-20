import { useId, useState, type FormEvent } from 'react';
import { business } from '../../data/content';
import { PhoneIcon, MailIcon, CheckIcon } from '../icons';
import { useReveal } from '../../hooks/useReveal';
import './ContactSection.css';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

type FormValues = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};

const initialValues: FormValues = {
  name: '',
  phone: '',
  email: '',
  projectType: '',
  message: '',
};

const projectTypes = [
  'Whole-home renovation',
  'Kitchen remodel',
  'Bathroom remodel',
  'Addition',
  'Exterior (siding, windows, doors, decks)',
  'Carpentry, cabinets & finish work',
  'Something else',
];

export function ContactSection() {
  const { ref: introRef, className: introClassName, style: introStyle } = useReveal<HTMLDivElement>({ delay: 0 });
  const { ref: formRef, className: formClassName, style: formStyle } = useReveal<HTMLFormElement>({ delay: 120 });
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const formId = useId();

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate(current: FormValues) {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!current.name.trim()) next.name = 'Enter your name.';
    if (!current.phone.trim() && !current.email.trim()) {
      next.phone = 'Add a phone number or email so we can reach you.';
    }
    if (current.email.trim() && !/^\S+@\S+\.\S+$/.test(current.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!current.projectType) next.projectType = 'Choose the type of project.';
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');
    try {
      // TODO: wire up to a real quote-request endpoint. Stubbed for now so
      // the form is fully interactive ahead of backend integration.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div
          ref={introRef}
          className={`contact__intro ${introClassName}`}
          style={introStyle}
        >
          <h2 className="contact__title">Contact Now To Get a Free Quote</h2>
          <p className="contact__subtitle">
            Tell us about the project and we'll get back to you within one
            business day. Prefer to talk it through first? Call or email
            directly.
          </p>

          <ul className="contact__methods">
            <li>
              <a href={business.phoneHref} className="contact__method">
                <PhoneIcon className="contact__method-icon" />
                <span>{business.phone}</span>
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="contact__method">
                <MailIcon className="contact__method-icon" />
                <span>{business.email}</span>
              </a>
            </li>
          </ul>

          <p className="contact__license">{business.license}</p>
        </div>

        <form
          ref={formRef}
          className={`contact__form ${formClassName}`}
          style={formStyle}
          noValidate
          onSubmit={handleSubmit}
        >
          {status === 'success' ? (
            <div className="contact__success" role="status">
              <CheckIcon className="contact__success-icon" />
              <div>
                <p className="contact__success-title">Request received.</p>
                <p className="contact__success-body">
                  Thanks &mdash; we'll follow up within one business day. For
                  anything urgent, call {business.phone}.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="contact__field">
                <label htmlFor={`${formId}-name`}>Name</label>
                <input
                  id={`${formId}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                />
                {errors.name && (
                  <p className="contact__error" id={`${formId}-name-error`}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="contact__field-row">
                <div className="contact__field">
                  <label htmlFor={`${formId}-phone`}>Phone</label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor={`${formId}-email`}>Email</label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                  />
                  {errors.email && (
                    <p className="contact__error" id={`${formId}-email-error`}>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              {errors.phone && (
                <p className="contact__error" id={`${formId}-phone-error`}>
                  {errors.phone}
                </p>
              )}

              <div className="contact__field">
                <label htmlFor={`${formId}-project`}>Project type</label>
                <select
                  id={`${formId}-project`}
                  name="projectType"
                  value={values.projectType}
                  onChange={(e) => updateField('projectType', e.target.value)}
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={errors.projectType ? `${formId}-project-error` : undefined}
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="contact__error" id={`${formId}-project-error`}>
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor={`${formId}-message`}>What are you looking to do?</label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="A few details help us quote accurately &mdash; rough size, timeline, anything you already know you want."
                />
              </div>

              {status === 'error' && (
                <p className="contact__error contact__error--form" role="alert">
                  Something went wrong sending your request. Please call{' '}
                  {business.phone} instead, or try again.
                </p>
              )}

              <button type="submit" className="btn btn--primary contact__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send request'}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
