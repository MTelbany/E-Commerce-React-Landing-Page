import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div>
      <h1>This page does not exist</h1>
      <h2>Please try to write the path correctly</h2>
        <Link to={"/"}>Go back to home</Link>
    </div>
  );
}
