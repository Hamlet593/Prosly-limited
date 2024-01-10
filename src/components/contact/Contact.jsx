import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>
                  Suite C, Level 7, World Trust Tower, 50 Stanley Street,
                  Central, Hong Kong
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>info@proslylimited.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
