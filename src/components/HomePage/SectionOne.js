import React from "react";
import Location from "../../images/location.svg";

function SectionOne() {
  return (
    <div className="section-one-container">
      <div className="content">
        <button className="auction-button"> Auction</button>

        <div className="profile">
            <div className="profile-image">
                <img src={require("../../images/Ellipse.png")}/>
            </div>
            <div className="profile-detail">
                <div className="profile-name">Guy Hawkins</div>
                <div className="profile-role">Agent </div>
            </div>
        </div>
        <div className="home-location">
            <div className="home-type">Wooden Home </div>
            <div>
                <img src={Location} alt=""/>
                <span className="home-address">56 Owen Street, North Bondi</span>
            </div>
        </div>
        <div className="home-area">
            <div className="home-type">Wooden Home </div>
            <div className="home-address">
                
                $35,00 / Sq Ft
            </div>
        </div>
      </div>

      
    </div>
  );
}

export default SectionOne;
