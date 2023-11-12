import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    flags:[]//Traigo todos los Usuarios
};
const Slice = createSlice({
    name: 'flags',
    initialState,
    reducers: {
        getFlags: (state, action) => {
            state.flags = action.payload;
        },
    }
});


export const { getFlags } = Slice.actions;
export default Slice.reducer;