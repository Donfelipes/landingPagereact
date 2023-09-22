import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";

const Home = () => {
  return (
    <>
    <Navbar />
    <Jumbotron />
	<div className="cards container">
	<Card/>
	<Card/>
	<Card/>
	<Card/>
	</div>
	
	<Footer />
    </>
  );
};

export default Home;
