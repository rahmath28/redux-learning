import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    theme:"dark"
}
export const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleTheme:(state) =>{
            state.theme = state.theme === "dark" ? "light" :"dark" // state irukka theme darak ah iruntha light , illana dark..
        }
    }
})

// need to export the actions and also slice file
export default themeSlice.reducer

export const {toggleTheme} = themeSlice.actions;