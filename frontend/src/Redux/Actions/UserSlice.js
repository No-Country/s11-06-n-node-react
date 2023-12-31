import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[], //Traigo todos los Usuarios
    post:[], //Uusuarios Nuevos
    userDetail: {}, //detalles del usuario Activo
    put:[], //modificar datos del usuario
    userGroups: [],
    userEvents: [],
    userNews: []
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
            state.userDetail = action.payload;
        },
        getUserGroups: (state, action) => {
            state.userGroups = action.payload;
        },
        getUserEvents: (state, action) => {
            state.userEvents = action.payload;
        },
        getUserNews: (state, action) => {
            state.userNews = action.payload;
        },
        logOut: (state, action) => {
            state.userDetail = {};
            state.userGroups= [];
            state.userEvents= [];
        },
    }
});


export const { getUsers, postUser,  getDetailUser, modifyUser,getUserGroups, getUserEvents, logOut, getUserNews } = Slice.actions;
export default Slice.reducer;