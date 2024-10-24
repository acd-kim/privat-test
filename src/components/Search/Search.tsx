import { FormEvent } from "react";

import { TextField } from "../TextField";
import "./Search.scss";

type TSearchProps = {
  onSubmit: (value: string) => void;
};

export function Search({ onSubmit }: TSearchProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // @ts-expect-error: Object is possibly 'null'.
    const inputValue = event.target.search.value.trim();
    onSubmit(inputValue);
  }

  return (
    <form className="search" action="/" onSubmit={handleSubmit}>
      <TextField type="text" name="search" placeholder="Search for products..." />
    </form>
  );
}
