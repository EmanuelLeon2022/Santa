import React from "react";

function Index({ gifts }) {
  return (
    <>
      <nav>
        <a href="/gifts/new">
          <h1>Somete tu Regalo Preferido</h1>
        </a>
      </nav>
      <ul>
        <h1>
          {" "}
          {gifts.map((gift, i) => {
            return (
              <li key={i}
                style={{
                  borderRadius: "22px",
                  margin: "1em",
                  border: " solid grey",
                  textAlign: "center",
                  display:"flex",
                  justifyContent: 'space-evenly'
                }}
              >
                {" "}
                <a href={`/gifts/${gift.id}`}>{gift.name} </a>{" "}
                <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <form action={`/gifts/${gift._id}?_method=DELETE`} method="POST">

                <input type="submit" value="DELETE" />
                </form>
                <a href={`/gifts/${gift._id}/edit`}><button style={{margin:"12px"}}>Editar Tu Envío</button></a>

                </div>
              </li>
            );
          })}
        </h1>
      </ul>
    </>
  );
}

export default Index;
