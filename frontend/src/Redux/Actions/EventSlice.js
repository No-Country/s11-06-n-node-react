import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events:[],
    post:[],
    eventDetail: [],
    put:[],
}

const Slice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        getEvents: (state, action) => {
            // console.log(action.payload);
            state.events = action.payload;
        },
        postEvent:(state, action) => {
            state.post = action.payload;
        },
        
        getDetailEvent: (state, action) => {
            state.eventDetail = action.payload;
        },   
      
        modifyEvent: (state, action) => {
            // console.log(action.payload);
            state.eventDetail = action.payload;
        },
    }
});

export const { getEvents, postEvent, getDetailEvent, modifyEvent } = Slice.actions;
export default Slice.reducer;