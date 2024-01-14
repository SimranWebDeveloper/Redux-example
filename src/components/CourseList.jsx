import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import SingleCard from './SingleCard';
import {clearCard} from '../redux/CardSlice'

const center={width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'2rem'}
export default function CourseList() {
    const {cardItems,quantity,total}=useSelector((store)=> (store.card))
    const dispatch=useDispatch()
  return (
    <>
        {
        quantity <-5 ? (
            <section  style={center}>
                <header>
                    <h2>Sebetim </h2>
                    <h4>BomBos</h4>
                </header>
            </section>
        ):(
            <section  style={center}>
                <header>
                    <h2>Sebetim </h2>
                </header>
                <div>
                    {
                        cardItems.map((item)=> <SingleCard key={item.id} {...item}/>  )
                    }
                </div>
                <footer>
                    <hr />
                    <div>
                    <h4>Toplam Tutar <span>{total}  AZN</span></h4>
                    </div>
                    <button onClick={()=>dispatch(clearCard())}>Temizle</button>
                </footer>
            </section>
        )
        }
    </>
  )
}
