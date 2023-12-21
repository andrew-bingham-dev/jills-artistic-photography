interface RadialGradientProps {
  left: string;
  top: string;
}

const RadialGradient: React.FC<RadialGradientProps> = ({ left, top }) => {
  return (
    <div
      className={`absolute z-decor w-auto h-auto opacity-30`}
      style={{
        left: `${left}%`,
        top: `${top}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1665"
          height="1665"
          viewBox="-832.5 -832.5 1665 1665"
          fill="none"
        >
          <path
            d="M986 832.5C986 1292.28 613.277 1665 153.5 1665C-306.277 1665 -679 1292.28 -679 832.5C-679 372.723 -306.277 0 153.5 0C613.277 0 986 372.723 986 832.5Z"
            fill="url(#paint0_radial_5842_5222)"
            fill-opacity="0.4"
          />
          <defs>
            <radialGradient
              id="customRadialGradient"
              cx="0"
              cy="0"
              r="832.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D9D9D9" />
              <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
            </radialGradient>
          </defs>
          <circle cx="0" cy="0" r="832.5" fill="url(#customRadialGradient)" />
        </svg>
      </div>
    </div>
  );
};

export default RadialGradient;
