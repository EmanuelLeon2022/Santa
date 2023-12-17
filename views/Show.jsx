import React from 'react'

function Show(props) {
  return (
    <>
        <h1>{props.fruit.name}</h1>
        <h3>{props.fruit.color}</h3>
         <h3>{props.fruit.readyToEat? "Esta seguro(a)" : " Está indeciso"}</h3>
    
    </>
  )
}

export default Show