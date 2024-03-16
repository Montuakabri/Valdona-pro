import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="notfound-inner">
      <div class="container">
        <div className="notfound-boby">
          <h1 className="notefound-title">
            Oops! We can't seem to find that page.
          </h1>
          <p className="notefound-text">
            The page you requested may have been moved or deleted.
            <br /> Perhaps you can try going to the homepage or searching the
            site.
          </p>
          <Link to="/" className="notefound-link">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
