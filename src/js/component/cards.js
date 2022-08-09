import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Cards= (props)=>{
  return(
<div className="Cards" >
  <img src={props.characters.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.characters.name}</h5>
    <p className="card-text">{props.gender}</p>
    
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{props.characters.status}</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <Link to={/single/+props.characters.id}>
  <button type="button" class="btn btn-primary">Primary</button>
  </Link>
  
</div>
  );
};



Cards.propTypes = {
  characters:PropTypes.any,
  name: PropTypes.string,
  gender: PropTypes.string
};
export default Cards;


