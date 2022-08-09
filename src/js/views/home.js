import React, { useEffect, useContext } from "react";

import cards from "../component/cards.js";
import CardContainer from "../component/CardsContainer.js";
import "../../styles/home.css";
import { Context } from "../store/appContext";

const Home = () => {

	const { store, actions } = useContext(Context);
	useEffect(()=>{
		actions.getCharacters() 
	},[])

	return (
		<div className="container-fluid">
	    <CardContainer/>
		</div>
		// <div className="">
		//     <CardsContainer/>
		//     <CardsContainer/>
		// </div>
	);
};
export default Home;



