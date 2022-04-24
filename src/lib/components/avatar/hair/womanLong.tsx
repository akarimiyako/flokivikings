import type { ReactElement } from "react";

type HairWomanLongProps = {
  color: string;
};

export default function hairWomanLong(props: HairWomanLongProps): ReactElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "-2.2%",
        width: "97%",
        height: "100%",
      }}
      width="306"
      height="331"
      viewBox="0 0 306 331"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M209.76 327.932C209.271 327.902 208.865 327.872 208.544 327.847C202.393 318.458 196.789 302.969 192.447 287.059C188.226 271.589 185.261 255.968 184.147 245.649C221.22 234.931 244.458 196.667 238.871 157.189C238.864 157.117 238.856 157.067 238.856 157.066C238.848 157.006 238.837 156.938 238.825 156.867C238.802 156.724 238.768 156.532 238.726 156.3C238.641 155.832 238.516 155.172 238.353 154.346C238.028 152.693 237.552 150.358 236.942 147.532C235.722 141.88 233.967 134.249 231.825 126.155C229.685 118.065 227.152 109.485 224.372 101.945C221.613 94.4597 218.541 87.8015 215.264 83.7056L214.967 83.3351L214.532 83.1463C212.6 82.3081 210.593 81.3741 208.499 80.3991C198.568 75.775 186.659 70.2299 171.235 69.6199C152.46 68.8774 128.684 75.3957 96.5441 98.7056L94.5214 100.173L96.467 101.74C112.393 114.574 115.836 131.598 115.1 146.048C114.539 157.077 111.551 166.459 109.865 171.149C108.704 169.452 107.964 167.319 107.408 164.814C107.023 163.083 106.743 161.258 106.449 159.347L106.403 159.045C106.096 157.051 105.769 154.97 105.292 152.961C104.341 148.95 102.732 144.941 99.1602 142.102C95.5807 139.257 90.3641 137.848 82.7671 138.272L80.5398 138.396L81.0046 140.578L92.3634 193.891L92.3824 193.98L92.41 194.068C96.4679 206.93 103.426 218.078 112.323 226.88C112.399 227.007 112.509 227.193 112.65 227.434C112.939 227.928 113.356 228.653 113.861 229.563C114.87 231.384 116.229 233.941 117.621 236.886C120.435 242.835 123.282 250.138 123.83 256.102C124.386 262.154 122.865 269.962 121.123 276.412C120.26 279.605 119.361 282.406 118.677 284.407C118.535 284.824 118.402 285.206 118.281 285.549C113.249 283.144 108.754 283.323 104.902 285.565C100.738 287.989 97.6892 292.625 95.4191 297.781C91.2706 307.202 89.2756 319.42 88.3551 327.002C63.4846 321.298 44.281 315.507 31.2149 311.107C24.5012 308.846 19.408 306.953 15.9993 305.627C14.2949 304.964 13.0117 304.443 12.1575 304.089C11.9454 304.002 11.7598 303.924 11.6007 303.857C11.4477 303.466 11.2377 302.916 10.9828 302.219C10.4158 300.667 9.62676 298.384 8.74853 295.479C6.99149 289.667 4.88057 281.38 3.4734 271.502C0.656265 251.725 0.676883 225.696 11.8698 200.384C13.679 196.292 15.94 192.089 18.3903 187.533C27.8582 169.931 40.1551 147.07 40.1551 105.084C40.1551 74.4931 55.0029 48.7305 76.8623 30.5692C98.7415 12.3915 127.56 1.9109 155.237 1.91092C170.368 1.91093 182.533 3.64443 192.311 9.55105C202.028 15.4212 209.679 25.5978 215.362 43.1322C215.94 44.9168 217.851 46.0074 219.719 45.4015C231.034 41.7304 248.191 45.4361 262.673 54.8904C277.091 64.3032 288.289 79.0455 288.289 96.8141C288.289 112.24 285.647 122.664 283.071 132.815L283.071 132.815C279.952 145.104 276.94 156.974 279.065 176.313C279.774 182.762 281.216 187.336 283.231 191.128C285.213 194.859 287.712 197.747 290.345 200.792L290.405 200.861C296.679 208.113 299.534 214.079 300.455 219.327C301.375 224.562 300.412 229.31 298.623 234.237C297.723 236.712 296.629 239.197 295.47 241.815L295.37 242.04C294.249 244.573 293.074 247.225 292.019 250.016C289.836 255.787 288.133 262.223 288.302 269.851C288.446 276.326 289.594 280.764 291.311 284.122C293.008 287.442 295.199 289.565 297.111 291.417L297.162 291.466C298.905 293.155 300.355 294.577 301.428 296.57C302.387 298.351 303.098 300.702 303.217 304.232C279.208 318.511 255.445 324.413 237.601 326.734C228.565 327.91 221.057 328.166 215.818 328.129C213.199 328.11 211.149 328.019 209.76 327.932Z"
        fill={color || "black"}
        stroke="black"
        strokeWidth="3.82184"
      />
    </svg>
  );
}
