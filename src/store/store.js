import { combineReducers, configureStore } from "@reduxjs/toolkit";

import  filterReducer from './filterSlice.js';

const rootReducer = combineReducers({
    filter : filterReducer
})

export default configureStore({ reducer : rootReducer })