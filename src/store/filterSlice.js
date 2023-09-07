import { createSlice } from "@reduxjs/toolkit";

export const filterReducer = createSlice({
    name:'filter',
    initialState:{
        searchTitle: null,
        category: []
    },
    reducers:{
        setSearchTitle:(state,action)=>{
            return {
                ...state,
                searchTitle:action.payload
            }
        },
        setCategory:(state,action)=>{
            return {
                ...state,
                category:action.payload
            }
        }
    }

})
export const {setSearchTitle,setCategory} = filterReducer.actions;

export default filterReducer.reducer;