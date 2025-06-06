import React from 'react'

function List() {
    const nama = [
        {
            id : 0,
            nama : 'ucup',
            kelas : 'XI RPL 10'
        },
        {
            id : 1,
            nama :'udin',
            kelas : 'XI RPL 11'
        }
    ]

    const judul = 'List Nama Students';
  return (
    <>
    <h2>{judul}</h2>
    <ul>
        {
            nama.map((list) => <li key={list.id}>{list.nama} - {list.kelas}</li>)
        }
    </ul>
    </>
  )
}

export default List