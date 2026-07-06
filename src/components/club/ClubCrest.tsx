export function ClubCrest({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 96"
      className={className}
      aria-hidden
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 4 L72 18 V46 C72 68 58 84 40 92 C22 84 8 68 8 46 V18 Z"
        fill="#0a2540"
        stroke="#f37021"
        strokeWidth="2"
      />
      <path
        d="M40 14 L62 24 V44 C62 58 52 70 40 76 C28 70 18 58 18 44 V24 Z"
        fill="#123456"
      />
      <circle cx="40" cy="44" r="14" fill="#f37021" opacity="0.9" />
      <path
        d="M40 34 C34 34 30 38 30 44 C30 50 34 54 40 54 C46 54 50 50 50 44"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <path d="M30 44 H50" stroke="white" strokeWidth="1.5" />
      <path d="M40 34 V54" stroke="white" strokeWidth="1.5" />
      <circle cx="28" cy="22" r="2" fill="#f37021" />
      <circle cx="40" cy="18" r="2" fill="#f37021" />
      <circle cx="52" cy="22" r="2" fill="#f37021" />
    </svg>
  );
}
