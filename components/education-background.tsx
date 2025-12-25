export function EducationBackground() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 651 538"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Main dark blue background shape */}
      <path d="M0 0h651v538H0z" fill="rgb(25, 65, 105)" fillOpacity="0.3" />

      {/* Laptop base */}
      <path
        d="M82 473c0-5.523 4.477-10 10-10h467c5.523 0 10 4.477 10 10v20c0 5.523-4.477 10-10 10H92c-5.523 0-10-4.477-10-10v-20z"
        fill="#5DD3CF"
      />

      {/* Laptop screen outer frame */}
      <path d="M115 221h420v236H115z" fill="#5DD3CF" stroke="#5DD3CF" strokeWidth="8" />

      {/* Laptop screen inner */}
      <path d="M130 236h390v206H130z" fill="rgb(25, 65, 105)" />

      {/* Book stack */}
      <path d="M130 320h110v30H130z" fill="#FFFEF5" />
      <path d="M130 350h110v30H130z" fill="#5DD3CF" />
      <path d="M130 380h110v30H130z" fill="#FFFEF5" />
      <path d="M130 410h110v30H130z" fill="#E8F4F8" />

      {/* Video cards on screen */}
      <rect x="350" y="260" width="140" height="80" rx="6" fill="rgb(52, 73, 94)" />
      <rect x="370" y="275" width="30" height="20" rx="3" fill="#5DD3CF" />
      <rect x="410" y="280" width="80" height="3" rx="1.5" fill="#E0E0E0" />
      <rect x="410" y="288" width="60" height="3" rx="1.5" fill="#E0E0E0" />

      <rect x="350" y="325" width="140" height="80" rx="6" fill="rgb(52, 73, 94)" />
      <rect x="370" y="340" width="30" height="20" rx="3" fill="#5DD3CF" />
      <rect x="410" y="345" width="80" height="3" rx="1.5" fill="#E0E0E0" />
      <rect x="410" y="353" width="60" height="3" rx="1.5" fill="#E0E0E0" />

      <rect x="350" y="390" width="140" height="80" rx="6" fill="rgb(52, 73, 94)" />
      <rect x="370" y="405" width="30" height="20" rx="3" fill="#5DD3CF" />
      <rect x="410" y="410" width="80" height="3" rx="1.5" fill="#E0E0E0" />
      <rect x="410" y="418" width="60" height="3" rx="1.5" fill="#E0E0E0" />

      {/* Video icon on book */}
      <rect x="207" y="265" width="70" height="50" rx="4" fill="#FFFEF5" />
      <path d="M230 280l20 10-20 10v-20z" fill="#5DD3CF" />

      {/* Desk lamp */}
      <path d="M90 180l30-100 15 5-25 95h60v20H90z" fill="#5DD3CF" />
      <path d="M120 165h50v35h-50z" fill="#FFFEF5" />
      <circle cx="145" cy="182" r="8" fill="rgb(25, 65, 105)" />

      {/* Flying book 1 (top right) */}
      <g transform="rotate(25 360 100)">
        <rect x="310" y="60" width="80" height="100" rx="4" fill="#5DD3CF" />
        <rect x="320" y="70" width="60" height="3" fill="#FFFEF5" />
        <rect x="320" y="80" width="50" height="3" fill="#FFFEF5" />
      </g>

      {/* Flying book 2 (top left) */}
      <g transform="rotate(-30 80 80)">
        <rect x="40" y="40" width="60" height="80" rx="4" fill="#5DD3CF" />
        <line x1="50" y1="55" x2="90" y2="55" stroke="#FFFEF5" strokeWidth="3" />
      </g>

      {/* Megaphone */}
      <g transform="translate(500, 120) rotate(30)">
        <path d="M0 0l40 15v20L0 50V0z" fill="#5DD3CF" />
        <circle cx="45" cy="25" r="15" fill="#FFFEF5" />
        <path d="M45 10v30" stroke="rgb(25, 65, 105)" strokeWidth="3" />
      </g>

      {/* Decorative shapes */}
      <circle cx="190" cy="100" r="8" fill="#6366F1" />
      <circle cx="440" cy="155" r="6" fill="#5DD3CF" />
      <path d="M75 360l-8-14h16z" fill="#6366F1" />
      <path d="M70 260l-5-9h10z" fill="#FCD34D" />
      <circle cx="55" cy="255" r="4" fill="#FCD34D" />
      <path d="M380 300l-6-10h12z" fill="#EC4899" />
    </svg>
  )
}
