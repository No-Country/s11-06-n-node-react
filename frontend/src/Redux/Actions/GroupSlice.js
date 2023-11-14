import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    groups:[],
    post:[],
    groupDetail: [],
    put:[],
};


const Slice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        getGroups: (state, action) => {
            state.groups = action.payload;
            
        },
        postGroup:(state, action) => {
            state.post = action.payload;
        },
        
        getDetailGroup: (state, action) => {
            state.groupDetail = action.payload;
        },   
      
        modifyGroup: (state, action) => {
            state.groupDetail = action.payload;
        },
        joinUserToGroup:(state, action) => {
            // state.groupDetail = action.payload;
        },
    }
});

export const { getGroups, postGroup, getDetailGroup, modifyGroup, joinUserToGroup } = Slice.actions;
export default Slice.reducer;