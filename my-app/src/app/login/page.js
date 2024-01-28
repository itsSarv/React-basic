'use client'
import Link from 'next/link'
const login=()=>{
 return (
 <div>
 <input placeholder="Name"/>
            <br/>
            <input type="password" placeholder="password"/>
            <br/>
            <Link href="/home"><button>Login</button></Link> 
</div>
 )
 }
 
export default login;