import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentTask:[],
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        newadd:(state,action)=>{
            state.currentTask=action.payload
        }
    }
})
export const {newadd}=userSlice.actions;
export default userSlice.reducer