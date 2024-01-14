import React from 'react'
import { SlBasketLoaded } from "react-icons/sl";
import { useSelector } from 'react-redux';

const basket = {
     position: "relative",
     fontSize: "2.5rem", }
const sup={
    position:'absolute',top:'-20px',left:'40px',
    background:'white',borderRadius:'50%',padding:'0.5rem',color:'red',fontSize:'1.5rem',}
export default function Navbar() {
    const {quantity}=useSelector((store)=>  (store.card))
    console.log(useSelector((store)=>  (store.card)));
  return (
    <nav>
      <div>
        <h1>Kurs Uygulamasi</h1>
      </div>
      <div>
        <div style={basket}>
            <span> <SlBasketLoaded  /></span>
            <span style={sup}>{quantity}</span>
        </div>

      </div>
    </nav>
  )
}
