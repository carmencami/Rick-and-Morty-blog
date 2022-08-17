import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Cardslocation= (props)=>{
    return(
        <div className="Cards" >
          <img src={props.location.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.location.name}</h5>
            
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.location.type}</li>
            <li className="list-group-item">{props.location.dimension}</li>
          </ul>
          <Link to={/singlepisode/+props.location.id}>
          <button type="button" class="btn btn-primary">Primary</button>
          </Link>
          
        </div>
          );
        };
Cardslocation.propTypes = {
    location:PropTypes.any,
    name: PropTypes.string,
    type: PropTypes.string,
    dimension: PropTypes.string
  };

export default Cardslocation