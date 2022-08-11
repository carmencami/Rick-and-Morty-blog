import React, { useState, useContext, useEffect } from "react";
import Cards from "./cards";

import { Context } from "../store/appContext";

const CardContainer = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="card-group">
        {store.characters.map((value) => {
          return <Cards key={value.id} characters={value} />;
        })}
      </div>
      {/* <div>
        {store.Location.map((value) => {
          return <Cards key={value.id} location={value} />;
        })}
      </div>
      <div>
        {store.Episode.map((value) => {
          return <Cards key={value.id} episode={value} />;
        })}
      </div> */}
    </div>
  );


 
};

export default CardContainer;
