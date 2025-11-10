import { IClassProps } from "@/types";

const ArrowRight = ({ className }: IClassProps) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1.3335 6.00016H10.6668M10.6668 6.00016L6.00016 1.3335M10.6668 6.00016L6.00016 10.6668"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRight