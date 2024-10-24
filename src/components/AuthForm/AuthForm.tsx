import type { FormEventHandler } from "react";

import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { TextField } from "../TextField";
import { TextLabel } from "../TextLabel";
import "./AuthForm.scss";

type TAuthFormProps = {
  loading?: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export function AuthForm({ loading = false, onSubmit }: TAuthFormProps) {
  return (
    <div className="auth-form">
      <h1>Sign In</h1>

      <form className="auth-form__form" action="/" onSubmit={onSubmit}>
        <FormGroup>
          <TextLabel htmlFor="username">Name:</TextLabel>
          <TextField type="text" name="username" placeholder="admin" pattern="\w{3,16}" required />
        </FormGroup>

        <FormGroup>
          <TextLabel htmlFor="password">Password:</TextLabel>
          <TextField type="password" name="password" placeholder="admin" pattern="\w{3,16}" required />
        </FormGroup>

        <Button type="submit" disabled={loading}>
          Submit
        </Button>
      </form>
    </div>
  );
}
