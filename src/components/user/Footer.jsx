import React from "react";
import { Link } from "react-router-dom";
import Socialicon from "./Socialicon";

const Footer = ({ data }) => {
  const cateroriesData = data.filter(function (footerData) {
    return footerData.type == "caterories";
  });
  const policyData = data.filter(function (footerData) {
    return footerData.type == "policy";
  });
  const discoverData = data.filter(function (footerData) {
    return footerData.type == "discover";
  });

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 col-sm-6">
                <div className="footer-box">
                  <h4>CATEGORIES</h4>
                  <ul>
                    {cateroriesData.map((item, index) => {
                      return (
                        <li className="footer-list" key={index}>
                          <Link to={`${item.path}`} className="footer-link">
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3 col-sm-6">
                <div className="footer-box">
                  <h4>POLICY</h4>
                  <ul>
                    {policyData.map((item, index) => {
                      return (
                        <li className="footer-list" key={index}>
                          <Link to={`${item.path}`} className="">
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3 col-sm-6">
                <div className="footer-box">
                  <h4>DISCOVER</h4>
                  <ul>
                    {discoverData.map((item, index) => {
                      return (
                        <li className="footer-list" key={index}>
                          <Link to={`${item.path}`} className="">
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3 col-sm-6">
                <div className="footer-box">
                  <h4>CUSTOMER SERVICE</h4>
                  <ul>
                    <li className="contect-list">Contact</li>
                    <li className="contect-list align-items-center">
                      <i class="fi fi-rr-clock-three"></i>
                      <p>MON-FRI - 9.00 AM TO 5.00 PM (IST)</p>
                    </li>
                    <li className="contect-list">
                      <i class="fi fi-sr-phone-call"></i>
                      <p>+91 8469043991</p>
                    </li>
                    <li className="contect-list">
                      <i class="fi fi-rr-envelope"></i>
                      <p>support@valdona@gmail.com</p>
                    </li>
                    <li className="contect-list">
                      <i class="fi fi-rs-building"></i>
                      <p>
                        108, anupam bussines hub, yogichok, surat, gujarat
                        395006
                      </p>
                    </li>
                    <div className="social-media">
                      <Socialicon />
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
