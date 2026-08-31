/** Decorative SVG art for the problem split — aria-hidden, non-interactive. */

export function StageProblemLockedArt() {
  return (
    <svg
      className="stg-problem-art stg-problem-art--locked"
      viewBox="0 0 280 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Monitor body */}
      <g className="stg-art-monitor">
        <rect
          x="48"
          y="28"
          width="160"
          height="112"
          rx="10"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.55"
        />
        <rect
          x="58"
          y="38"
          width="140"
          height="84"
          rx="4"
          fill="currentColor"
          opacity="0.06"
        />
        {/* Chart bars trapped on screen */}
        <rect x="72" y="78" width="14" height="32" rx="2" fill="currentColor" opacity="0.28" />
        <rect x="94" y="62" width="14" height="48" rx="2" fill="currentColor" opacity="0.22" />
        <rect x="116" y="70" width="14" height="40" rx="2" fill="currentColor" opacity="0.3" />
        <rect x="138" y="54" width="14" height="56" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="160" y="66" width="14" height="44" rx="2" fill="currentColor" opacity="0.26" />
        {/* Stand */}
        <path
          d="M112 140h32v10H112z"
          fill="currentColor"
          opacity="0.35"
        />
        <path
          d="M88 158h80v4H88z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M96 150h64v8H96z"
          fill="currentColor"
          opacity="0.22"
        />
      </g>

      {/* Padlock — coral accent via CSS */}
      <g className="stg-art-lock">
        <path
          d="M118 96V84a22 22 0 0 1 44 0v12"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <rect
          x="108"
          y="96"
          width="64"
          height="52"
          rx="10"
          fill="currentColor"
          opacity="0.92"
        />
        <circle cx="140" cy="118" r="7" fill="#fff" opacity="0.95" />
        <path
          d="M140 125v10"
          stroke="#fff"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.95"
        />
      </g>
    </svg>
  );
}

export function StageProblemOpenArt() {
  return (
    <svg
      className="stg-problem-art stg-problem-art--open"
      viewBox="0 0 280 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Phone body */}
      <g className="stg-art-phone">
        <rect
          x="96"
          y="18"
          width="88"
          height="168"
          rx="16"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.5"
        />
        <rect
          x="104"
          y="32"
          width="72"
          height="140"
          rx="4"
          fill="currentColor"
          opacity="0.05"
        />
        {/* Notch */}
        <rect x="126" y="24" width="28" height="5" rx="2.5" fill="currentColor" opacity="0.28" />
        {/* Home indicator */}
        <rect x="124" y="170" width="32" height="3" rx="1.5" fill="currentColor" opacity="0.22" />
      </g>

      {/* Chat bubbles */}
      <g className="stg-art-bubbles">
        <g className="stg-art-bubble stg-art-bubble--1">
          <rect
            x="112"
            y="48"
            width="56"
            height="28"
            rx="10"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M120 58h40M120 66h28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.35"
          />
        </g>
        <g className="stg-art-bubble stg-art-bubble--2">
          <rect
            x="128"
            y="88"
            width="64"
            height="32"
            rx="10"
            fill="var(--cyan, #22d3ee)"
            opacity="0.55"
          />
          <path
            d="M138 100h44M138 108h30"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          />
        </g>
        <g className="stg-art-bubble stg-art-bubble--3">
          <rect
            x="112"
            y="130"
            width="48"
            height="24"
            rx="10"
            fill="currentColor"
            opacity="0.1"
          />
          <path
            d="M120 142h32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.32"
          />
        </g>
      </g>

      {/* Soft ping ring near phone */}
      <circle
        className="stg-art-ping"
        cx="204"
        cy="72"
        r="10"
        stroke="var(--teal, #0d9488)"
        strokeWidth="2"
        fill="none"
        opacity="0.45"
      />
      <circle cx="204" cy="72" r="4" fill="var(--teal, #0d9488)" opacity="0.55" />
    </svg>
  );
}
