import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[], //Traigo todos los Usuarios
    post:[], //Uusuarios Nuevos
    userDetail: {}, //detalles del usuario
    put:[], //modificar datos del usuario
    userGroups: [],
    userEvents: []
};
const Slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload;
        },
        postUser:(state, action) => {
            state.post = action.payload;
        },
        getDetailUser: (state, action) => {
            // console.log(action.payload);
            state.userDetail = action.payload;
            // console.log(state.userDetail);
        },   
        modifyUser: (state, action) => {
            state.put = action.payload;
        },
        getUserGroups: (state, action) => {
            state.userGroups = action.payload;
        },
        getUserEvents: (state, action) => {
            state.userEvents = action.payload;
        },
    }
});


export const { getUsers, postUser,  getDetailUser, modifyUser,getUserGroups, getUserEvents } = Slice.actions;
export default Slice.reducer;