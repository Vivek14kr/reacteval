import React from "react";

import { useState, useEffect } from "react";


export const ShowReceipe = () => {
    useEffect(()=>{
        getReceipe()
    },[])
  const [data, setData] = useState([])
  const [show, setShow] = useState(true)
    const getReceipe = () =>{
        return fetch("http://localhost:3001/Recipe")
        .then((d) => d.json()).then((res)=>{
            setData(res)
        })
    }
    console.log(data, "dusra wala")
  return <div >
     
      <p>{data.map(item =>
        <ul>
          <li key= {item.id}>{`${item.title}`}</li>
           <li key= {item.id}>{`${item.ingredients}`}</li>
            <li key= {item.id}>{`${item.time}`}</li>
             <li key= {item.id}>{`${item.instructions}`}</li>
              <li key= {item.id}>{`${item.image}`}</li>
            <hr />
          </ul>
      )}
      </p>
    </div>
  
};

//    {
//       "title": "mango",
//       "ingredients": "mango",
//       "time": "23",
//       "image": "",
//       "instructions": "plant mango tree",
//       "id": 2
//     }











































