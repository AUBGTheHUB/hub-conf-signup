import React from "react";
import "../style.css";
import { GoLocation } from 'react-icons/go';
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin
} from 'react-icons/ai';

const Footer  = () =>{
    return (
        <div className="hubFooter">
          <div className="ContactUs" id="ContactUs">
            <div className="iconsContacts">
              <div className="icons">
                <p>
                  <AiOutlinePhone /> Phone:{' '}
                </p>
                <p>
                  <AiOutlineMail /> Mail:{' '}
                </p>
                <p>
                  <GoLocation /> Address:{' '}
                </p>
              </div>
              <div className="data">
                <p>
                  <a href="tel:+359892963652" className="linkStyle">
                    +359 89 2963652
                  </a>
                </p>
                <p>
                  <a href="mailto:thehubaubg@gmail.com" className="linkStyle">
                    thehubaubg@gmail.com
                  </a>
                </p>
                <p>Svoboda Bachvarova 12, Blagoevgrad</p>
              </div>
            </div>
            <div className="Socials">
              <p>
                <a href="https://www.facebook.com/TheHubAUBG">
                  <AiOutlineFacebook className="socialLogos" />
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/thehubaubg/?hl=en./">
                  <AiOutlineInstagram className="socialLogos" />
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/company/the-hub-aubg/">
                  <AiOutlineLinkedin className="socialLogos"></AiOutlineLinkedin>
                </a>
              </p>
            </div>
          </div>

          <div className="trademark">
            <p className="removeMargin">© The Hub AUBG 2022</p>
          </div>
        </div>
    )
}

export default Footer;