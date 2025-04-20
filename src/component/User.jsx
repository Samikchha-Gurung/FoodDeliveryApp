import { useState } from "react";

const User=(props)=>{
    const[count,setCount]=useState(0);
    const {name,location,contact}=props
    return (
        <div className="card">
            <h1>Example for functional Component </h1>
            <h2>Count : {count}</h2>
            <h2>Name:{name}</h2>
            <h2>Location:{location} </h2>
            <h2>Contact :{contact}</h2>
            <button onClick={()=>{
                setCount(count=>count+1)
            }}>
Click
            </button>
        </div>
    )
}
export default User;