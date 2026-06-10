export function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="url(#rose-gradient)" />
      <text x="16" y="22" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="sans-serif">G</text>
      <defs>
        <linearGradient id="rose-gradient" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#d48a8a" />
          <stop offset="1" stopColor="#c46a7a" />
        </linearGradient>
      </defs>
    </svg>
  );
}
