import React from "react";
import PropTypes from "prop-types";

const LocationDetail = props => {
	return (
		<div className="row text-center">
			<div className="col">
				<h5>Name</h5>
				{props.value && props.value.name ? props.value.name : ""}
			</div>
			<div className="col">
				<h5>Type</h5>
				{props.value && props.value.type ? props.value.type : ""}
			</div>
			<div className="col">
				<h5>Dimension</h5>
				{props.value && props.value.dimension ? props.value.dimension : ""}
			</div>
			<div className="col">
				<h5>Resident</h5>
				{props.value && props.value.resident ? props.value.resident : ""}
			</div>
		</div>
	);
};

LocationDetail.propTypes = {
	value: PropTypes.object
};

export default LocationDetail;
