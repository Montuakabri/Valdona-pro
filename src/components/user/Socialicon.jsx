import React from "react";
import "../../assets/user/css/components.css";

const Socialicon = () => {
  return (
    <div>
      <h4>Stay Connected</h4>
      <ul className="socialicon-list">
        <li className="socialicon-item">
          <a href="" className="socialicon-link">
            <i class="fi fi-brands-instagram"></i>
          </a>
        </li>
        <li className="socialicon-item">
          <a href="" className="socialicon-link">
            <i class="fi fi-brands-facebook"></i>
          </a>
        </li>
        <li className="socialicon-item">
          <a href="" className="socialicon-link">
            <i class="fi fi-brands-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socialicon;
