import type { LabelHTMLAttributes, PropsWithChildren } from "react";

import "./TextLabel.scss";

type TTextLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function TextLabel({ children, ...props }: PropsWithChildren<TTextLabelProps>) {
  return (
    <label className="text-label" {...props}>
      {children}
    </label>
  );
}
