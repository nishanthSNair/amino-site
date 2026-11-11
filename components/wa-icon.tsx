/** Chat bubble with a handset: the WhatsApp entry point. */
export function WaIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
      <path
        d="M12 2.6a9.4 9.4 0 0 0-8.1 14.2L2.7 21.3l4.6-1.2A9.4 9.4 0 1 0 12 2.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.1 7.6c.2 0 .4 0 .6.4l.8 1.9c.1.2 0 .4-.1.6l-.6.7c-.1.1-.1.3 0 .5.6 1 1.4 1.8 2.5 2.4.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.3.3.3.5 0 .9-.7 1.8-1.7 1.9-.8.1-1.9-.1-3.4-.9a9 9 0 0 1-3.5-3.6c-.6-1.2-.7-2.2-.5-2.9.2-.8.9-1.4 1.6-1.5h.4Z"
        fill="currentColor"
      />
    </svg>
  );
}
