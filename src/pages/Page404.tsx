import { memo } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function Page404() {
  const error = useRouteError();

  return (
    <main className="page-container">
      <h1>404 Page not found</h1>
      {isRouteErrorResponse(error) ? <p>{error.status || error.statusText}</p> : <p>"Unknown Error"</p>}
    </main>
  );
}

export default memo(Page404);
