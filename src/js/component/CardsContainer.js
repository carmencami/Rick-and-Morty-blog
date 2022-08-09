import React, { useState, useContext, useEffect } from "react";
import Cards from "./cards";

import { Context } from "../store/appContext";

const CardContainer = () => {

  const { store, actions } = useContext(Context);
return( <div>
  {store.characters.map((value)=>{
    return( <Cards key={value.id} characters={value} />)
  })}
 
</div>
);



  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(store.characters);
  // }, [store.characters]);

  // const dataDisplay = (obj) =>
  //   obj.map((item, i) => (
  //     <div className="" key={i}>
  //       {console.log(item.name)}
  //       <Cards src={item.image} name={item.name} gender={item.gender} />
  //     </div>
  //   ));

  // return <>{dataDisplay(data)} </>;
};




export default CardContainer;
