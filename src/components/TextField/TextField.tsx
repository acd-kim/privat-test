import type { InputHTMLAttributes } from "react";

import "./TextField.scss";

type TTextFieldProps = InputHTMLAttributes<HTMLInputElement>;

export function TextField(props: TTextFieldProps) {
  return <input className="text-field" {...props} />;
}
