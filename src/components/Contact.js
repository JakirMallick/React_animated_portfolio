import React from "react";

// npm i react-icons   // after installation search react-icons that you need
//copy codes and import here
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com" target="_blank" className="items">
            <FaInstagramSquare className="icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/jakir-mallick-857a23132/"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.x.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a
            href="https://github.com/JakirMallick?tab=repositories"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:jakirmallick7404@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
