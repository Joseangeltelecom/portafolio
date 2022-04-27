import React from "react";
import "./about.scss";
import { Person, Mail, GitHub, Code } from "@mui/icons-material";
import SC from "../../themes/styledComponents";
// imgs
import logo from "../../assets/logo/logo1TransparentSec.png";

export default function About() {
  return (
    <div className="about section" id="about">
      <div className="title-container">
        <h1>
          <SC.SectionTitle href="#about">
            <SC.Brackets>&lt; </SC.Brackets>
            About me
            <SC.Brackets> /&gt;</SC.Brackets>
          </SC.SectionTitle>
        </h1>
      </div>

      <div className="container">
        <div className="mobile-img-container">
          <SC.AboutImgMobile src={logo} alt="" />
        </div>
        <SC.UnderLinedH2 className="mobile">Jose Martinez</SC.UnderLinedH2>
        <div className="left">
          <div className="img-container">
            <SC.AboutImg src={logo} alt="" />
          </div>
          <div className="info">
            <h2>Jose Martinez</h2>
            <div className="item-container">
              <Mail className="icon" />
              <span>joseangeltelecom@gmail.com</span>
            </div>
            <a
              href="https://github.com/Joseangeltelecom"
              target="_blank"
              rel="noopener noreferrer"
              className="item-container"
            >
              <GitHub className="icon" />
              <span>github.com/Joseangeltelecom</span>
            </a>
            <div className="item-container">
              <Person className="icon" />
              <span>+51-972-420-425</span>
            </div>
            <a
              href="https://github.com/Joseangeltelecom/portafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="item-container"
            >
              <Code className="icon" />
              <span>Repo for this project</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <div class="scroll-fade-top"></div>
            <h4 className="mobile-horizontal-title">
              {" "}
              <span>&lt; </span>
              <a href="#about">About me</a>
              <span> /&gt;</span>
            </h4>
            <p className="info-p">
              Welcome! My name is Jose Martinez, I am a self-taught web
              developer and Telecommunications Engineer.
            </p>
            <SC.Break className="break"></SC.Break>
            <p className="info-p">
              Starting from no-code in January of 2020 I became obsessed with
              the world of programming. Poring through resources such as The
              Odin Project, FreeCodeCamp, and Codecademy I have been developing
              the necessary skills for becoming a full stack developer.
            </p>
            <SC.Break className="break"></SC.Break>
            {/* <p>
              Prior to programming I graduated with a bachelors in business
              administration with a focus in accounting from Temple University
              and spent 6 years working in the field. I have also been working
              as a free-lance graphic designer since 2017 being self-taught in
              Adobe photoshop & illustrator.
            </p>
            <div className="break"></div> */}
            <SC.LastP className="last-p">Let's work together!</SC.LastP>
            <div className="info mobile">
              <SC.Break className="break"></SC.Break>
              <div className="item-container">
                <Mail className="icon" />
                <span>joseangeltelecom@gmail.com</span>
              </div>
              <a
                href="https://github.com/joseangeltelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="item-container"
              >
                <GitHub className="icon" />
                <span>github.com/Joseangeltelecom</span>
              </a>
              <div className="item-container">
                <Person className="icon" />
                <span>(+51)-972-420-425</span>
              </div>
              <a
                href="https://joseangeltelecom.github.io/portafolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="item-container"
              >
                <Code className="icon" />
                <span>Repo for this project</span>
              </a>
            </div>
            <div class="scroll-fade-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
