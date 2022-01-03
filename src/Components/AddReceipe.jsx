import React from "react";

import { useState, useRef , useEffect} from "react";
const initState = {
  title: "",
  ingredients: "",
  time: "",
  image: "",
  instructions: "",
};

export const AddReceipe = () => {

  const [recepie, setRecepie] = useState(initState);

  
const handleChange = (e)=>{
    let {name, value} = e.target;
    setRecepie((prev)=>({...prev, [name]:value}))
}

const onSubmit = (e) =>{
    e.preventDefault()
    fetch("http://localhost:3001/Recipe",{
        method:"POST",
        body:JSON.stringify(recepie),
        headers:{
            "content-type":"application/json"
        }
    })
  
    
   
}

  
  const { title, ingredients, time, image, instructions } = recepie;
  return (
    


    <div >
      <h1>RECEPIE FORM</h1>
      <form onSubmit={onSubmit}>
        <input onChange={handleChange} type="text" name="title" value={title} placeholder="Title" />

        <input
        onChange={handleChange}
          type="text"
          name="ingredients"
          value={ingredients}
          placeholder="Ingredients"
        />
        <input onChange={handleChange} type="text" name="time" value={time} placeholder="Time" />
        <input onChange={handleChange}  type="file" name="image" />
        <input
        onChange={handleChange}
          type="text"
          name="instructions"
          value={instructions}
          placeholder="instructions"
        />

        <input type="submit" />
              </form>
              
    </div>
  );
};
