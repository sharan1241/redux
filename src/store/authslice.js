import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username:"",
    email:"",
}

export const authslice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setusername:(state,action)=>{
            state.username = action.payload;
        },
        setemail:(state,action)=>{
            state.email = action.payload;
        }
    }
})
export const {setusername,setemail} = authslice.actions;
export default authslice.reducer;