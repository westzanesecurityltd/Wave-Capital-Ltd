import { IClassProps } from "@/types";

const TwitterxIcon = ({ className }: IClassProps) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_269_96)">
      <mask
        id="mask0_269_96"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={26}
        height={26}
      >
        <path d="M0 0H26V26H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_269_96)">
        <path
          d="M20.475 1.21875H24.4623L15.7523 11.199L26 24.7822H17.9771L11.6889 16.5457L4.50171 24.7822H0.510714L9.82614 14.1036L0 1.22061H8.22714L13.9026 8.74761L20.475 1.21875ZM19.0729 22.3902H21.2829L7.02 3.48632H4.65029L19.0729 22.3902Z"
          fill="#1B4277"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_269_96">
        <rect width={26} height={26} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default TwitterxIcon;
