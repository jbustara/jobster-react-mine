/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h1>Page not found</h1>
        <p>Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/">Go Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
