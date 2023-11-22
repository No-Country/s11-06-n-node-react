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
            state.groupDetail = action.payload;
        },
        acceptUserToGroup:(state, action) => {
            // state.groupDetail = action.payload;
            const userIdToAccept = action.payload;
            const userToMove = state.groupDetail.users_pending.find(user => user._id === userIdToAccept);

            if (userToMove) {
                state.groupDetail.users_pending = state.groupDetail.users_pending.filter(user => user._id !== userIdToAccept);
                state.groupDetail.users_common.push(userToMove);
            }
        },
        leaveUserToGroup: (state, action) => {
            const userIdToRemove = action.payload; // El _id del usuario que deseo quitar
            state.groupDetail.users_pending = state.groupDetail.users_pending.filter(user => user._id !== userIdToRemove);
            state.groupDetail.users_common = state.groupDetail.users_common.filter(user => user._id !== userIdToRemove);
        },
    }
});

export const { getGroups, postGroup, getDetailGroup, modifyGroup, joinUserToGroup,leaveUserToGroup, acceptUserToGroup } = Slice.actions;
export default Slice.reducer;