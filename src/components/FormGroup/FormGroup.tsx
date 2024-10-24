import type { HTMLAttributes, PropsWithChildren } from "react";

import "./FormGroup.scss";

type TFormGroupProps = HTMLAttributes<HTMLDivElement>;

export function FormGroup({ children, ...props }: PropsWithChildren<TFormGroupProps>) {
  return (
    <div className="form-group" {...props}>
      {children}
    </div>
  );
}
