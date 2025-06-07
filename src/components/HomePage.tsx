import React from 'react'
import Paragraf from './Paragraf'
import data from '../pages/data.json'
function HomePage() {
  return (
    <>
        <h1>Simple Blog</h1>
        {
            data.map(datas => {
                return(
                    <Paragraf
                    title={datas.title}
                    nama={datas.nama}
                    hobi={datas.hobi} 
                    />
                )
            })
        }
    </>
  )
}

export default HomePage