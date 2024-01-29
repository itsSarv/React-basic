'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
 
const page = () => {
 const [ randomNum, setRandomNum ] = useState(0)
 const lotteryItem = ['lose', 'lose', 'jetplane', 'lose','1000$']
 let time

 useEffect(()=>{
 time = setTimeout(()=>{
 if(randomNum === 4){
 setRandomNum(0)
 }else{
 setRandomNum(randomNum+1)
 }
 },200)
 },[randomNum])
 
 const submitLottery = () => {
    //    if(lotteryItem[randomNum] == 'lose'){
    //     alert("you lose")
    //    }
    //    else{
    //    alert("You have won " + lotteryItem[randomNum])
    //    }
    lotteryItem[randomNum] == "lose"? alert("You lose") : alert("You won " + lotteryItem[randomNum])

 }


 return (
 <div>
 {lotteryItem.map((item,id)=>{
 return <li style={{backgroundColor:id===randomNum ? "red": null}} >{item}</li>
 })}
 
 <button onClick={submitLottery}>Stop</button>
 </div>
 )
}
 
export default page