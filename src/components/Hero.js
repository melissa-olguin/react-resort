import React from "react";


export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps ={
  hero:'defaultHero'
}




/*
//const Hero = ({ children, hero }) => {
//  return <header className={hero}>{children}</header>;
//};

//export default Hero;

//Hero.defaultProps = {
//  hero: "defaultHero"
//};
*/