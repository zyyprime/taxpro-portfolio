export function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="url(#gold-gradient)" />
      <text x="16" y="22" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="sans-serif">T</text>
      <defs>
        <linearGradient id="gold-gradient" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#d4a853" />
          <stop offset="1" stopColor="#f5c542" />
        </linearGradient>
      </defs>
    </svg>
  );
}
