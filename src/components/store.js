import {configureStore,createSlice} from '@reduxjs/toolkit'
 const initialState={
     items:[]
 }

const formSlice=createSlice({
    name:'form',
     initialState:initialState,
     reducers:{
      addItemHendler(state,action){
          console.log("ITem Added")
          state.items.push({author:action.payload.author,
            text:action.payload.text
        })
      }
     }
})
const store=configureStore({reducer:formSlice.reducer})
export const formActions=formSlice.actions;
export default store;