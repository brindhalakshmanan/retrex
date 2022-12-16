import React from "react";
import Caret from "../images/caret.svg";
import Phone from "../images/Vector.svg";
import Setting from "../images/settingIcon.svg";

const Navbar = () => {
  return (
    <navbar className="navbar">
      <div className="logo">
        <img src={require("../images/Logo.png")} alt="Retrex" />
      </div>
      <div className="primary-navbar">
        <div>Home</div>
        <div>
          Properties
          <img src={Caret} alt="" className="caret" />
        </div>
        <div>
          Property
          <img src={Caret} alt="" className="caret" />
        </div>
        <div>
          Realtor
          <img src={Caret} alt="" className="caret" />
        </div>
        <div>
          Others
          <img src={Caret} alt="" className="caret" />
        </div>
      </div>
      <div className="secondary-navbar">
        <div className="contact-navbar">
          <div>
            <img src={Phone} alt="" />
          </div>
          <div>+92 3155687893</div>
        </div>
        <div className="setting">
          <img src={Setting} alt="Setting" />
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
