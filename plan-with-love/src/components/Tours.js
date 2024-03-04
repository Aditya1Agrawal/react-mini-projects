import React, {useState}from 'react'
import { Tour } from './Tour'
export const Tours = ({tours,removetour}) => {
  return (
    <div className='container'>
        <div className='title'>Plan With Love</div>
        <div className='cards'>{tours.map((tour)=>(<Tour key ={tour.id} {...tour} removetour={removetour}/>))}</div>
        
    </div>
  )
}
