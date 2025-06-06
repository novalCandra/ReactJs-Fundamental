import React from 'react'

function Paragraf() {
  const ctx = 'ini adalah Components Kedua ';
  const ctxa = ['list array one', 'list array two', 'list array three'];
  return (
    <>
      <p>
        {ctx}
      </p>
      <p>
        {
          ctxa.map(listctx => <p>{listctx}</p>)
        }
      </p>
    </>
  )
}

export default Paragraf