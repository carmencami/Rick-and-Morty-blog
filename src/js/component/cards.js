import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Cards= (props)=>{
  return(
    <div class="card" style={{width: "1000rem"}}>
  <img src={props.characters.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
  }
    
{/* <div className="card Cards" >
  <img src={props.characters.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.characters.name}</h5>
    <p className="card-text">{props.gender}</p>
    
  </div>
  <div>
    <p className="card-text">{props.characters.gender}</p>
    <p className="card-text">{props.characters.especies}</p>
    <p className="card-text">{props.characters.status}</p>
  </div>
  <Link to={/single/+props.characters.id}>
  <button type="button" class="btn btn-primary">Primary</button>
  </Link>
  
</div> */}




Cards.propTypes = {
  characters:PropTypes.any,
  name: PropTypes.string,
  gender: PropTypes.string
};
export default Cards;


