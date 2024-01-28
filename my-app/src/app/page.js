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
    </div>
  )
}

export default app;