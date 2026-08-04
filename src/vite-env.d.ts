/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Endpoint the contact form POSTs to. Unset until a real backend (e.g. Formspree, Web3Forms, or a custom function) is wired up. */
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
