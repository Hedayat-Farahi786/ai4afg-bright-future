export function BrandMark({ className = "size-9" }: { className?: string }) {
  // Stylized "tree of dots" mark inspired by ai4afghanistan.org
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      {/* canopy dots */}
      <g fill="var(--color-brand)">
        <circle cx="24" cy="6" r="2.6" />
        <circle cx="16" cy="9" r="2.6" />
        <circle cx="32" cy="9" r="2.6" />
        <circle cx="10" cy="15" r="2.6" />
        <circle cx="38" cy="15" r="2.6" />
        <circle cx="18" cy="16" r="2.6" />
        <circle cx="30" cy="16" r="2.6" />
        <circle cx="24" cy="14" r="2.6" />
        <circle cx="13" cy="22" r="2.6" />
        <circle cx="35" cy="22" r="2.6" />
      </g>
      {/* trunk */}
      <path
        d="M24 20 L24 44"
        stroke="var(--color-navy)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M24 30 L18 36 M24 30 L30 36"
        stroke="var(--color-navy)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
