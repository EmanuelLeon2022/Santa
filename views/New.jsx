import React from "react";

function New() {
  return (
    <>
      <h1>Forma de Regalo</h1>
      <form action="/fruits" method="POST"><br/>
        Name: <input style={{margin:"1em"}} type="text" name="name" /><br/>
        Regalo Querido: <input  style={{margin:"1em"}}type="text" name="color" /><br/>
        Estas Seguro(a): <input  style={{margin:"1em"}}type="checkbox" name="readyToEat" /><br/>
        <input style={{margin:"1em", borderRadius:'5px'}} type="submit" value="Envíar" />
      </form>
    </>
  );
}

export default New;