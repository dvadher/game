import React from "react";
import Navbar from "../Navbar";
import HeroBanner from "../HeroBanner";
import logo from '../../images/Slogan.png'



function Home() {

  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];


  return (
    <body>
      <Navbar />
      <HeroBanner></HeroBanner  >
      <footer className="footer">
        <div className="footer_logo">
        <img src={logo}/>
        </div>
      </footer>
    </body>
  );
}

export default Home;
