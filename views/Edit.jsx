import React from 'react'

function Edit({gift}) {
  return (
   <>
   <a href='/gifts'>Regresar al Indice</a>
     <form action={`/gifts/${gift._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={gift.name}/><br/>
          Item: <input type="text" name="item"  defaultValue={gift.item}/><br/>
          Sure:
              { gift.sure? <input type="checkbox" name="sure" defaultChecked />: <input type="checkbox" name="sure"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
   </>
  )
}

export default Edit