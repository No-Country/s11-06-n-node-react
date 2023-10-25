import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[], //Traigo todos los Usuarios
    post:[], //Uusuarios Nuevos
    userDetail: [], //detalles del usuario
    put:[], //modificar datos del usuario
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
            state.userDetail = action.payload;
        },   
      
        modifyUser: (state, action) => {
            state.userDetail = action.payload;
        },
    }
});


export const { getUsers, postUser,  getDetailUser, modifyUser } = Slice.actions;
export default Slice.reducer;