import type { IconProps } from "../types";

const ErrorIcon = ({ className = "" }: IconProps) => {
  return (
    <svg
      //   width="120"
      //   height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60 12.5L5 107.5H115L60 12.5Z"
        fill="#E24A4A"
        stroke="#E24A4A"
        stroke-width="10"
        stroke-linejoin="round"
      />
      <path
        d="M60 87.5V90"
        stroke="#FAEEEE"
        stroke-width="10"
        stroke-linecap="round"
      />
      <path
        d="M60 47.502L60.0208 72.5007"
        stroke="#FAEEEE"
        stroke-width="10"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default ErrorIcon;
