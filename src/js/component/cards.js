import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Cards = props => {
	const { store, actions } = useContext(Context);
	const AddFavorites = event => {
		if (props.value.isFavorite) {
			actions.deleteFavorites(props.category, props.value);
		} else {
			actions.favorites(props.category, props.value);
		}
	};
	console.log(props.category)

	return (
		<div key={props.index} className="card" style={{ width: "18rem" }}>
			{props.value.image ? (<img src={props.image} className="card-img-top" alt="..."/>):(<img src="https://lh5.googleusercontent.com/proxy/wO-IdIXh2YDqJklLHYG9mbOKMFWMIg4VC4AtIdh-3rjypt0NtyVcRyV_aaIhRMv4xyGrvFDlmocpc0XOUNZrpV6Ny14uCewVMhiunQwR8n5Qg76IxW_a6wGAKCixAygfEGIC5bM08jm1Ci41PFqf_ympLkrfMmYW9rxq92gcMzQM=w1200-h630-p-k-no-nu" className="card-img-top" alt="..."/>) }
			<div className="card-body">
				<h5 className="card-title">{props.value.name}</h5>
				<ul className="card-body">Name: {props.value.name}</ul>
				<Link className="btn btn-primary" to={"/details/" + props.category + "/" + props.value.id}>
					Learn more!
				</Link>
				<button
					href="#"
					className={`btn far fa-heart ${props.value.isFavorite ? "favorites" : ""}`}
					onClick={AddFavorites}
				/>
			</div>
		</div>
	);
};

Cards.propTypes = {
	value: PropTypes.object,
	index: PropTypes.number,
	category: PropTypes.string
};
export default Cards;



