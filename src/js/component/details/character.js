import React from "react";
import PropTypes from "prop-types";

const CharactersDetail = props => {
	return (
		<div className="row text-center">
			<div className="col">
				<h5>Name</h5>
				{props.value && props.value.name ? props.value.name : ""}
			</div>
			<div className="col">
				<h5>Status</h5>
				{props.value && props.value.status ? props.value.status : ""}
			</div>
			<div className="col">
				<h5>Species</h5>
				{props.value && props.value.species ? props.value.species : ""}
			</div>
			<div className="col">
				<h5>Type</h5>
				{props.value && props.value.type ? props.value.type : ""}
			</div>
			<div className="col">
				<h5>Gender</h5>
				{props.value && props.value.gender ? props.value.gender : ""}
			</div>
		</div>
	);
};

CharactersDetail.propTypes = {
	value: PropTypes.object
};

export default CharactersDetail;