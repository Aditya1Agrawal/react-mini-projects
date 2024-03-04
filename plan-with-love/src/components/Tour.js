import React ,{useState}from 'react'

export const Tour = ({id,name,info,image,price,removetour}) => {
    const[readmore,setreadmore]=useState(true);
    function clickhandler(){
        removetour(id);
    }
    const description =readmore?info.substr(0,200)+'...':info;
  return (
    <div className='card'>
        <img src={image} className='image'/>
        <div className='tour-info'>
          <div className='tour-details'>
          <p className='tour-price'>₹{price}</p>
        <p className='tour-name'>{name}</p>
          </div>
          <div  className='description'>{description}
            {<span onClick={()=>(setreadmore(!readmore))} className='readmore'>{readmore?"Read More":"Show Less"}</span>}
        </div>
        </div>
       
        <button onClick={clickhandler} className='btn-red'>Not intereseted</button>
    </div>
  )
}
