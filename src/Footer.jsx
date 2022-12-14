import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  return (
    <>
      <section className="contact-short">
        <div className="grid grid-two-column" id="get-startedbox">
          <div>
            <h3>Ready to Get Started</h3>
            <h3>Chat With Us</h3>
          </div>
          <div>
            <NavLink to="/">
              <button type="button" className="btn btn-outline-primary">
                Get-Started
              </button>
            </NavLink>
          </div>
        </div>
      </section>
      {/* footer section */}
      <footer>
        <div className="container">
          <div className="footer-about">
            <h3>Brijesh Verma</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum?
            </p>
          </div>
          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get Updates</h3>
            <form action="#">
              <input
              className="email"
                type="email"
                required
                autoComplete="off"
                placeholder="email"
              />
              <input type="Submit" value="Subscribe" id="Submit-btnnn" />
            </form>
          </div>
          {/* footer social */}
          <div className="footer-social">
          <div>
            <h3>Follow us</h3>
          </div>
            <div className="social-icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaTwitter className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 1234567777</h3>
          </div>
          {/* bottom section */}
          <div className="bottom-section">
            <hr />
            <div className="container2">
                <p className="name">
                Copyright ©  {new Date().getFullYear()} Brijesh Verma. All Right Reserved
                </p>
                <div className="last">
                    <p>PRIVACY POLICY</p>
                    <p>TERMS AND CONDITION</p>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
