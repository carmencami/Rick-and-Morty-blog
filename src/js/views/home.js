import React, { useContext } from "react";
import "../../styles/home.css";
import Cards from "../component/cards";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container testimonial-group">
			<h1 className="categoryData">Characters</h1>
			<div className="row">
				{store.character
					? store.character.map((value) => {
							return <Cards key={value.id} value={value} image={value.image} index={value.id} category={"character"} />;
					  })
					: ""}
			</div>
			<h1 className="categoryData">Location</h1>
			<div className="row">
				{store.location
					? store.location.map((value, index) => {
							return <Cards key={index} value={value} index={index} category={"location"} />;
					  })
					: ""}
			</div>
		</div>
	);
};

export default Home;




