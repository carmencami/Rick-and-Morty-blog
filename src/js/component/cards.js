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

	return (
		<div key={props.index} className="card" style={{ width: "18rem" }}>
			{props.value.image ? (<img src={props.image} className="card-img-top" alt="..."/>):(<img src="https://th.bing.com/th/id/OIP.0ku1AvUo__-ohxH4EqTXOAHaEo?pid=ImgDet&rs=1" className="card-img-top" alt="..."/>) }
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



