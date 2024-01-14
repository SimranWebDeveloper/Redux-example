import React from 'react'
import { PiArrowFatLinesUpDuotone } from "react-icons/pi";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { increment,decrement,  removeItem } from '../redux/CardSlice';



const myStyle={width:'80%',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'1.5rem',border:'1px solid black',margin:'1rem',padding:'1rem',overflow:'hidden'}
const myStyle2={width:'50%',   display: 'flex',
flexDirection: 'column',
alignItems: 'center', 
justifyContent: 'space-between',gap:'2rem'}

const SingleCard = ({id,title,price,img,quantity}) => {
  const dispatch=useDispatch()
  return (
    <div key={id} style={myStyle}>
        <img src={img} alt="" style={{width:'50%',height:'50vh',objectFit:'cover'}} />
        <div style={myStyle2}>
            <h3>{title}</h3>
            <h4>{price*quantity} AZN</h4>
            <div >
                <button onClick={()=>dispatch(increment(id))}><PiArrowFatLinesUpDuotone/></button>
                <span>{quantity}</span>
                <button onClick={()=>dispatch(decrement(id))}><FaAngleDoubleDown /></button>
            </div>
            <button onClick={()=>dispatch(removeItem(id))}>Temizle</button>
        </div>
    </div>
  )
}

export default SingleCard
