import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
}
const counterSlice = createSlice(
    {
        name:"counter",
        initialState,
        reducers:{
            increment : (state, action)=>{
                state.count +=1
                console.log("state", state)
                console.log("action", action)
            },
             decrement : (state, action)=>{
                state.count -=1
                console.log("state", state)
                console.log("action", action)
            }
        }
    }
)

export const {increment, decrement}=counterSlice.actions
export default counterSlice.reducer