import React, { useState, useContext, useEffect } from "react";
import Cards from "./cards";
import Cardslocation from "./cardslocation";
import CardsEpisode from "./cardsepisodes"

import { Context } from "../store/appContext";

const CardContainer = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="card-group Cardcharecters">
        {store.characters.map((value) => {
          return <Cards key={value.id} characters={value} />;
        })}
      </div>
      <div className="card-group">
         {store.Location.map((value) => {
          return <Cardslocation key={value.id} location={value} />;
        })}
      </div>
      <div className="card-group">
        {store.Episode.map((value) => {
          return <CardsEpisode key={value.id} episode={value} />;
        })}
      </div>
    </div>
  );


 
};

export default CardContainer;
