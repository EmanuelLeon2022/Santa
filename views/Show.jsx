import React from 'react'

function Show(props) {
  return (
    <>
      <div style={{textAlign:'center', backgroundImage:'url(https://beulahndlibrary.files.wordpress.com/2013/12/let-it-snow-animated1.gif)'}}>
        <a href='/gifts' style={{color:'blue'}}>Regresar al Indice</a>
        <h1>{props.gift.name}</h1>
        <h3>{props.gift.item}</h3>
         <h3>{props.gift.sure? "Esta seguro(a)" : " Está indeciso"}</h3>
      </div>
    </>
  )
}

export default Show