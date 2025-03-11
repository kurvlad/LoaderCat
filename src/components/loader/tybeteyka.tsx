import { OrnamentCopy } from "./ornament-copy";
import styles from "./loader.module.css";
import type { FC } from "react";

type TybeteykaType = {
  className: string;
};

export const Tybeteyka: FC<TybeteykaType> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        fill="#134627"
        width="60"
        height="60"
        id="icon"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m25 39h-2c-8-.07-16.3-1.14-19.74-2.72l-.26 2.72a1.55 1.55 0 0 0 .89 1.47c2.43 1.08 9.45 2.45 19.17 2.53h1.94c9.7-.08 16.72-1.46 19.16-2.54a1.53 1.53 0 0 0 .84-1.46l-.31-2.71c-3.41 1.57-11.69 2.64-19.69 2.71z"></path>
        <path d="m38.88 16c-1-.76-6.66-2-14.88-2s-13.91 1.24-14.88 2c1 .76 6.66 2 14.88 2s13.91-1.24 14.88-2z"></path>
        <path d="m23.06 37h1.94c9.26-.08 17.33-1.49 19.52-2.85l-1.52-19.07s-2.12-5.08-19-5.08-19 5-19 5l-1.51 19.14c2.27 1.36 10.35 2.78 19.57 2.86zm.94-25c1.64 0 17 .11 17 4s-15.36 4-17 4-17-.11-17-4 15.36-4 17-4z"></path>
      </svg>
      <div className={styles.ornament}>
        <OrnamentCopy />
      </div>
    </div>
  );
};
