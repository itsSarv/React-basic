'use client'
import { useState } from "react"
const home = ()=>{
    const [num, calculation] = useState(10)
    const addsum = ()=>{
       calculation(num+1)
    }
    const minsum = ()=>{
        if(num==0){
            alert("Number could'nt be less than 0")
        }
        else{
        calculation(num-1)}
     }

return(
    <div>
    {num}
    <button onClick={addsum}> Increment </button>
    <button onClick={minsum}> Decrement </button>
</div>
)}
export default home;

