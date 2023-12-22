import React from 'react'

function Show(props) {
  return (
    <>
      <div style={{display:'flex',justifyContent:'center', width:'100%', minWidth:'650'}}>
        <div style={{
          textAlign: 'center',
          backgroundImage: 'url(https://beulahndlibrary.files.wordpress.com/2013/12/let-it-snow-animated1.gif)',
          width: '550px',
          height: '1000px'
        }}>
          <div style={{}}>
            <a href='/gifts' style={{ color: 'blue' }}>Regresar al Indice</a>
            <h1 style={{ color: 'white', backgroundColor: '#dc9923', width: '500px', display: 'flex', justifyContent: 'center' }}>{props.gift.name}</h1>
            <h3>{props.gift.item}</h3>
            <h3>{props.gift.sure ? "Si lo qieure" : " Está indeciso(a)"}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Show