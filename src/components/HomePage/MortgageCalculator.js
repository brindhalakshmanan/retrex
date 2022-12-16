import React from "react";
import Location from "../../images/locationCopy.svg";
import circleYellow from "../../images/calCircleYellow.svg";

function MortgageCalculator() {
  return (
    <div>
      <div>
        <h1>Mortgage Calculator </h1>
        <div className="mortage-caculator-container">
          <div className="monthly-container">
            <div className="circle">
              {/* <img src={circleYellow} alt="" className="yellowCircle" />
              <div className="monthly"></div> */}
            </div>
            <div className="taxAndInsDetails">
              <div className="principle">
                <div className="principle-first"></div>
                <div>Principle Interest</div>
                <div>$3,500.00 </div>
              </div>
              <hr />

              <div className="principle">
                <div className="principle-second"></div>
                <div>Property Tax</div>
                <div>$250.00</div>
              </div>
              <hr />
              <div className="principle">
                <div className="principle-third"></div>
                <div>Home Insurance</div>
                <div>$88.00</div>
              </div>
              <hr />
              <div className="principle">
                <div className="principle-four"></div>
                <div>PMI</div>
                <div>$1000.00</div>
              </div>
              <hr />
            </div>
          </div>

          <div className="total">
            <div>
              <div>Total Amount</div>
              <div className="total-amount">
                <div className="dollar-symbol">$</div>
                <div className="line-seperator"></div>
                <div className="amount">76,0000</div>
              </div>
            </div>

            <div>
              Total Amount
              <div className="total-amount">
                <div className="dollar-symbol">$</div>
                <div className="line-seperator"></div>
                <div className="amount">76,0000</div>
              </div>
            </div>

            <div>Total Amount
            <div className="total-amount">
                <div className="dollar-symbol">$</div>
                <div className="line-seperator"></div>
                <div className="amount">76,0000</div>
              </div>
            </div>
            <div>Loan Terms (Years)
            <div className="total-amount">
                <div className="dollar-symbol">$</div>
                <div className="line-seperator"></div>
                <div className="amount">76,0000</div>
              </div>
            </div>
            <div>Property Tax
            <div className="total-amount">
                <div className="dollar-symbol">$</div>
                <div className="line-seperator"></div>
                <div className="amount">76,0000</div>
              </div>
            </div>
            <div>Home Insurance
            <div className="total-amount">
                <div className="dollar-symbol">$</div>
                <div className="line-seperator"></div>
                <div className="amount">76,0000</div>
              </div>
                 </div>
            <div>Total Amount
            <div className="total-amount">
                <div className="dollar-symbol">$</div>
                <div className="line-seperator"></div>
                <div className="amount">76,0000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>video</div>
        <div>
          <iframe
            width="1314px"
            height="739px"
            src="https://www.youtube.com/embed/0hzpQXdDhfc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div>360 Degree Tour</div>
      <img
        src={require("../../images/degree.png")}
        alt="Retrex"
        className="degree-img"
      />
      <div>
        <h1>Walk Score</h1>

        <div>
          <img src={Location} alt="" />
          <span>1435 Logan St Los Angeles CA 90026 USA</span>
        </div>

        <div className="walk-score">
          <div className="walk-num">
            <div>95</div>
            <div className="walk-content">Walk Score </div>
          </div>
          <span>
            <div className="walker-one">Walker's Paradise</div>
            <div className="walker-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </span>
        </div>
        <div className="walk-score">
          <div className="walk-num">
            <div>55</div>
            <div className="walk-content">Transit Score </div>
          </div>

          <span>
            <div className="walker-one">Walker's Paradise</div>
            <div className="walker-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </span>
        </div>
        <div className="walk-score">
          <div className="walk-num">
            <div>86</div>
            <div className="walk-content">Bike Score </div>
          </div>
          <span>
            <div className="walker-one">Walker's Paradise</div>
            <div className="walker-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MortgageCalculator;
