import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import "./Button.scss";

type TButtonProps = {
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ fullWidth = false, children, ...props }: PropsWithChildren<TButtonProps>) {
  return (
    <button className={`button ${fullWidth ? "button_full-width" : ""}`} {...props}>
      {children}
    </button>
  );
}
