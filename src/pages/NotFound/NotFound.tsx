import "./NotFound.scss";


const ERROR_MESSAGE: string = "SYSTEM_ERROR_INVALID_ROUTE";

export function NotFound(): JSX.Element {
  console.error(ERROR_MESSAGE);

  return (
    <>
      <h1>{ERROR_MESSAGE}</h1>
    </>
  );
}
