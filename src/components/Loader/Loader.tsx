import type { HTMLAttributes } from "react";

import loaderSvg from "../../assets/loader.svg";
import "./Loader.scss";

type TLoaderProps = HTMLAttributes<HTMLDivElement>;

export function Loader(props: TLoaderProps) {
  return (
    <div className="loader" {...props}>
      <img className="loader__img" src={loaderSvg} alt="Loading..." />
    </div>
  );
}
