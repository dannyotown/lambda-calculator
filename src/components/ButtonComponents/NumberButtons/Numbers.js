import React from "react";
import { NumberButton } from "./NumberButton" 

//import any components needed

//Import your array data to from the provided data file

export const Numbers = () => {
  // STEP 2 - add the imported data to state
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbers.map((num,index)=>{
        return <NumberButton key={index} text={num} />
 
       })}
    </div>
  );
};
