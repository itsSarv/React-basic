'use client'
import React, { useState } from 'react'
import { GrLike } from "react-icons/gr";
import { FaRegFaceSurprise } from "react-icons/fa6";
import { FaRegFaceAngry } from "react-icons/fa6";
 
const Reaction = () => {
 const [reactionOpen, setReactionOpen] = useState(false)
 const [reactionType , setReactionType] = useState(null)
 const handleReaction = (action)=> {
 if(reactionType === action) {
 setReactionType('')
 }else{
 setReactionType(action)
 }
 }
 
 const ReactionDiv = () => {
 return (
 <div>
 <button onClick={()=>handleReaction('like')}><GrLike/></button>
 <button onClick={()=>handleReaction('wow')}><FaRegFaceSurprise/></button>
 <button onClick={()=>handleReaction('angry')}><FaRegFaceAngry/></button>
 </div>
 )
 }
 
 const GenerateReaction = () => {
 if(reactionType === 'angry'){
 return ( <button onMouseEnter={()=> setReactionOpen(true)} onClick={()=>handleReaction('angry')}><FaRegFaceAngry color={reactionType && "red"}/></button>)
 }else if(reactionType === 'wow'){
 return ( <button onMouseEnter={()=> setReactionOpen(true)} onClick={()=>handleReaction('wow')}><FaRegFaceSurprise color={reactionType && "orange"}/></button>)
 }else{
 return( <button onMouseEnter={()=> setReactionOpen(true)} onClick={()=>handleReaction('like')}><GrLike color={reactionType && "blue"}/></button>)
 }
 }
 
 return (
 <div className='division'>
 {reactionOpen && (<ReactionDiv/>)}
 <GenerateReaction/>
 </div>
 )
}
 
export default Reaction