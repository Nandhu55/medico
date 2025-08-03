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
              font-size: 28px;
              fill: hsl(var(--primary));
            }
             .pill2door-stethoscope-path {
                stroke: hsl(var(--primary));
             }
             .pill2door-accent-circle {
                fill: hsl(var(--accent));
             }
          `}
        </style>
      </defs>
      
      {/* Stethoscope */}
      <path
        className="pill2door-stethoscope-path"
        d="M 45 23 C 55 13 65 10 80 10 L 150 10 C 165 10 175 15 180 25 L 188 33"
        strokeWidth="3"
        fill="none"
        transform="translate(0, -2)"
      />
      <circle className="pill2door-stethoscope-path" cx="190" cy="35" r="4" fill="hsl(var(--primary))" transform="translate(0, -2)"/>
       <path className="pill2door-stethoscope-path" d="M 190 39 A 5 5 0 1 1 190 31" strokeWidth="2.5" fill="none" transform="translate(0, -2)" />

      {/* Plus icon in circle */}
       <circle className="pill2door-stethoscope-path" cx="25" cy="23" r="20" strokeWidth="3" fill="none"/>
      <circle className="pill2door-accent-circle" cx="25" cy="23" r="14" />
      <path
        d="M 20 23 L 30 23 M 25 18 L 25 28"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Text */}
      <text x="75" y="35" className="pill2door-text">PILL2DOOR</text>
    </svg>
  );
}
