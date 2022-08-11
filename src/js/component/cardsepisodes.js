import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Cardsepisodes= (props)=>{
  return(
<div className="Cards" >
  <img src={props.episode.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.characters.name}</h5>
    <p className="card-text">{props.gender}</p>
    
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{props.episode.name}</li>
    <li className="list-group-item">{props.episode.air_date}</li>
    <li className="list-group-item">{props.characters.status}</li>
  </ul>
  <Link to={/singlepisode/+props.episode.id}>
  <button type="button" class="btn btn-primary">Primary</button>
  </Link>
  
</div>
  );
};



Cardsepisodes.propTypes = {
  characters:PropTypes.any,
  name: PropTypes.string,
  gender: PropTypes.string
};
export default Cardsepisodes;


