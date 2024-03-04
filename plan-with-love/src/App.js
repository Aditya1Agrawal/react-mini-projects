import React, { useState } from "react";
import data from "./data.js"
import { Tours } from "./components/Tours.js";
const App = () => {
  const[tour,settour]=useState(data);
  function removetour(id){
   const newtour= tour.filter((tour)=>(tour.id!=id));
   settour(newtour);
  }
  if(tour.length===0){
    return(
      <div className="refresh">
      <div>No tours left</div>
      <button onClick={()=>(settour(data))} className="btn-white">Refresh</button>
      </div>
    )
    
  }
  return (
    <div>
      <Tours tours={tour} removetour={removetour}/>
    </div>
  );
};

export default App;
