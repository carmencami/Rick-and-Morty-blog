import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element, number } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/global.css";

const Favorites = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();   

	return (
		<>
		<div className="dropstart">
				<button className="btn btn-bg-star star-text" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu btn-bg-star">   
					<li className="bg-star star-text">Characters</li>
					{store.favoriteChars.length != 0 ?
					store.favoriteChars.map((element, index)=>{
						return(
							<div className="col-12 d-flex justify-content-between bg-star" key={index}>
								<li className="list-group-item d-flex justify-content-between bg-star star-text">{element.name}</li>
								<button className="btn btn-bg-star star-text" onClick={() => actions.deleteFavoriteChar(index)}><i className="fa-solid fa-trash"></i></button>
							</div>
						)
					}):
					 <li className="star-text py-2">Empty</li>
					}
					<li className="bg-star star-text">Planets</li>
					{store.favoritePlans.length != 0 ?
					store.favoritePlans.map((element, index)=>{
						return(
							<div className="col-12 d-flex justify-content-between bg-star" key={index}>
								<li className="list-group-item d-flex justify-content-between bg-star star-text">{element.name} </li>
								<button className="btn btn-bg-star star-text" onClick={() => actions.deleteFavoritePlan(index)}><i className="fa-solid fa-trash"></i></button>
							</div>
						)
					}):
					<li className="star-text py-2">Empty</li>}
				</ul> 
			</div>
        </>
	);
};
export default Favorites;