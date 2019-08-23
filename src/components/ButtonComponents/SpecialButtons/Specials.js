import React, {useState} from "react";
import { SpecialButton } from "./SpecialButton"; 
import { specials } from "/Users/Dtown/Documents/GitHub/Marketing-PageNoFork/lambda-calculator/src/data"; 
//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specDef, specChange] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
       
       {specials.map((num,index)=>{
        
        return <SpecialButton key={index} text={num} />
        
       })}
       
    </div>
  );
};
