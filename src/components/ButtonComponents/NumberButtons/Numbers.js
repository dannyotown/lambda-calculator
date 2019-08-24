import React, {useState} from "react";
import { NumberButton } from "./NumberButton" 
import { numbers } from "/Users/Dtown/Documents/GitHub/Marketing-PageNoFork/lambda-calculator/src/data";

//import any components needed

//Import your array data to from the provided data file

export const Numbers = ({changeButtonDisplay}) => {
  // STEP 2 - add the imported data to state
  const [numDef, numChange] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbers.map((num,index)=>{
         if(num === "0"){
          return <NumberButton key={index} text={num} id="specialClass" value={changeButtonDisplay} />
         }else{
          return <NumberButton key={index} text={num} value={changeButtonDisplay} />
         }
       })}
    </div>
  );
};
