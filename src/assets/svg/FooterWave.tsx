import React from 'react'

export default function FooterWave(): JSX.Element {
  return (
    <svg
      width="100%"
      height="100%"
      fill="#0083EF"
      viewBox="0 0 1440 150"
      xmlns="http://www.w3.org/2000/svg"
      className="wave-svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0L60 4.49871C120 9.6401 240 18.6375 360 46.2725C480 73.9075 600 120.18 720 148.458C840 176.093 960 185.09 1080 171.594C1200 157.455 1320 120.18 1380 102.185L1440 83.5476V250H1380C1320 250 1200 250 1080 250C960 250 840 250 720 250C600 250 480 250 360 250C240 250 120 250 60 250H0V0Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-7.5"
          y1="48.5"
          x2="1440"
          y2="235.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0083EF" />
          <stop offset="0.833333" stopColor="#3F75A1" />
        </linearGradient>
      </defs>
    </svg>
  )
}
