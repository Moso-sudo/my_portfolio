import React from "react";
import {Link} from "react-router-dom"

const Skills = () => {
  const partners = [
    {
      name: ".com",
    //   image: "img/partners/logo1.svg",
      url: "",
    },
    {
      name: ".com",
      // image: "img/partners/logo2.svg",
      url: "",
    },
    {
      name: ".com",
      // image: "img/partners/logo3.svg",
      url: "",
    },
    {
      name: ".com",
      // image: "img/partners/logo4.svg",
      url: "",
    },

  ];
  return (
    <div id="partners" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-8 offset-xl-2">
            <div className="section__title">
              <h2>Our Partners</h2>
              <p></p>
            </div>
          </div>
        </div>
      <div className="row">
        {
          partners.map((partner, index) =>(

            <div key={index} className="col-6 col-lg-3">
                <a href="{partner.link}" className="partner">
                  <img src={partner.image} alt="" />
                  <p>{partner.name}</p>
                </a>
            </div>
          
          )
        )
            
          
        }
      </div>


      </div>
    </div>
  )
};

export default Skills;
