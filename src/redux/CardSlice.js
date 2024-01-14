import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../CourseItems";

const initialState={
    cardItems:courseItems,
    quantity:1,
    total:276
}

 const cardSlice=createSlice({
    name:'card',
    initialState,
    reducers:{
        // clear all Cards
        clearCard:(state)=>{
            state.cardItems=[]
            state.quantity=0
            state.total=0
        },
        // clear one card         payload:id
        removeItem:(state,action)=>{

            state.cardItems=state.cardItems.filter((item)=>item.id!=action.payload)

        },
        // increment quantity
        increment:(state,action)=>{

            const index=state.cardItems.findIndex((item)=>item.id==action.payload)  // which index
            state.cardItems[index].quantity=state.cardItems[index].quantity+1

        },
        decrement:(state,action)=>{
            const index=state.cardItems.findIndex((item)=>item.id==action.payload)  // which index

            if ((state.cardItems[index].quantity)> 0) {

                state.cardItems[index].quantity=state.cardItems[index].quantity-1  
            }

  
        },
        calculateTotal:(state)=>{
            let total=0
            let basketQuantity=0

            state.cardItems.forEach((item)=>{
                total+=item.price*item.quantity
                basketQuantity+=item.quantity   
            })

            state.total=total
            state.quantity=basketQuantity
            console.log('state.quantity',state.quantity);
        }
    }


})
console.log(cardSlice);

export const {clearCard,removeItem,increment,decrement,calculateTotal}=cardSlice.actions

export default cardSlice.reducer