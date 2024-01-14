import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import CourseList from './components/CourseList'
import { useSelector,useDispatch } from 'react-redux'
import { calculateTotal } from './redux/CardSlice'

export default function App() {
  const {cardItems}=useSelector((store)=> (store.card))
  const dispatch=useDispatch()

  useEffect(() => {
    console.log('ISLEDI');
    dispatch(calculateTotal())
  }, [cardItems])
  return (
    <div>
      <Navbar/>
      <CourseList/>
    </div>
  )
}
