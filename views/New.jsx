import React from "react";

function New() {
  return (
    <>
    <div style={{textAlign:'center'}}>
    <a href="/gifts">Regresar al Indice</a>
      <h1>Forma de Regalo</h1>
      <form action="/gifts" method="POST"><br/>
        Name: <input style={{margin:"1em"}} type="text" name="name" /><br/>
        Regalo Querido: <input  style={{margin:"1em"}}type="text" name="item" /><br/>
        Estas Seguro(a): <input  style={{margin:"1em"}}type="checkbox" name="sure" /><br/>
        <input style={{margin:"1em", borderRadius:'5px'}} type="submit" value="Envíar" />
      </form>
    </div>
    </>
  );
}

export default New;