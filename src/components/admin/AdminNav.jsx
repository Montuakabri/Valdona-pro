import React from "react";
import { Link } from "react-router-dom";

const AdminNav = ({ data }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand navlogo" href="#">
          Hi, Admin!
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {data?.map((val, ind) => {
              return (
                <li class="nav-item active" key={ind}>
                  <Link to={`${val.path}`} class="nav-link">
                    {val.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
