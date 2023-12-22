import React from "react";

function Index({ gifts }) {
  return (
    <>
    <div style={{
      border:'#3a75c5 solid 5px',
      borderRadius:'5px',
      backgroundColor:'#C58A3A',
      height:'1300px',
      }}>
        {/* style={{display:'flex',justifyContent:'center', minWidth:'650'}} */}
      <nav>
        <a href="/gifts/new" style={{border:'white solid 5x',
        borderRadius:'5px', color:'white',
        fontFamily:'sans-serif'}}>
          <h1 style={{textAlign:'center'}}>Somete tu Regalo Preferido</h1>
        </a>
      </nav>
      <ul>
        <h1>
          {" "}
          {gifts.map((gift, i) => {
            return (
              <li key={i}
                style={{
                  fontFamily:'monospace',
                  borderRadius: "22px",
                  margin: "1em",
                  width:'75%',
                  height:'80px',
                  backgroundColor:'#3a75c5',
                  border: " solid white",
                  textAlign: "center",
                  display:"flex",
                  justifyContent: 'space-evenly'
                }}
              >
                {" "}
                <a href={`/gifts/${gift.id}`} style={{color:'white', textDecoration:'none'}}>{gift.name} </a>{" "}
                <div style={{display:"flex",justifyContent:"space-evenly"}}>
                {/* <form action={`/gifts/${gift._id}?_method=DELETE`} method="POST">

                <input type="submit" value="DELETE" />
                </form> */}
                <a href={`/gifts/${gift._id}/edit`}><button style={{margin:"12px", borderRadius:'5px'}}>Editar Tu Envío</button></a>

                </div>
              </li>
            );
          })}
        </h1>
      </ul>
      </div>
    </>
  );
}

export default Index;
