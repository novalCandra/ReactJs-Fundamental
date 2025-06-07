import React from 'react'

function Paragraf(props) {
  return (
    <>
    <h3>{props.title}</h3>
    <small>Nama :{props.nama}, <br /> Hobi : {props.hobi.join(",")}</small>
      {/* <p>
        {props.text}
      </p>
      <p>
        {
          props.list.map(props => <p>{props}</p>)
        }
      </p> */}
    </>
  )
}

export default Paragraf