import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activities:[],
    post:[],
    activityDetail: [],
    put:[],
};

const Slice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        getActivities: (state, action) => {
            state.activity = action.payload;
            
        },
        postActivity:(state, action) => {
            state.post = action.payload;
        },
        
        getDetailActivity: (state, action) => {
            state.activityDetail = action.payload;
        },   
      
        modifyActivity: (state, action) => {
            state.activityDetail = action.payload;
        },
    }
});

export const { getActivities, postActivity, getDetailActivity, modifyActivity } = Slice.actions;
export default Slice.reducer;