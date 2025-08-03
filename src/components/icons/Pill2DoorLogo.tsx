import type { SVGProps } from "react";

export function Pill2DoorLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="200"
      height="50"
      {...props}
    >
      <defs>
        <style>
          {`
            .pill2door-text {
              font-family: 'PT Sans', sans-serif;
              font-weight: 700;
              font-size: 24px;
            }
          `}
        </style>
      </defs>
      
      {/* Stethoscope */}
      <path
        d="M 55 25 C 55 42.6 40 50 30 50 C 10 50 5 30 5 25 C 5 5 25 5 30 5 C 35 5 55 10 55 25 Z M 190 45 A 5 5 0 0 1 190 35"
        stroke="#007B8A"
        strokeWidth="3"
        fill="none"
        transform="translate(0, -5)"
      />
      <path
        d="M 55 20 C 65 10 80 10 80 10 L 150 10 C 150 10 170 10 180 25 L 185 30 L 190 40"
        stroke="#007B8A"
        strokeWidth="3"
        fill="none"
        transform="translate(0, -5)"
      />
      <circle cx="190" cy="40" r="4" fill="#007B8A" transform="translate(0, -5)"/>
      
      {/* Plus icon in circle */}
      <circle cx="30" cy="20" r="12" fill="#00C4B4" />
      <path
        d="M 26 20 L 34 20 M 30 16 L 30 24"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Text */}
      <text x="85" y="22" className="pill2door-text" fill="#007B8A">PILL 2</text>
      <text x="85" y="45" className="pill2door-text" fill="#007B8A">DOOR</text>
    </svg>
  );
}
