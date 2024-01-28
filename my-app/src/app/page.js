import Link from 'next/link'

const app = ()=>{
  const navitem = ["Home", "About", "Contact"];
  return(
    <div>
      
    <div style={{display:"flex"}}>
          {navitem.map((item, id)=>{
            return <div className="navitem">{item}</div>
          })}
    </div>
      <h1>Hello I'm Saurav</h1>
      Please <Link href="/login"><button>Login</button></Link> to procced
    </div>
  )
}

export default app;