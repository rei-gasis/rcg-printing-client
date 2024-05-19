import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const nav = useNavigate();
  return (
    <div className="container">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <button
        type="button"
        onClick={() => {
          nav("/");
        }}
      >
        Go Home
      </button>
      <button
        type="button"
        onClick={() => {
          nav(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
