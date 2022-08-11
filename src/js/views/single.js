import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();
	useEffect(()=>{
		actions.getSingleCharacter(id) 
	},[])
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.Singlecharacter.name}</h1>

			{/* <hr className="my-4" />   falta estructura html  */}

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};

export default SingleCharacter;
