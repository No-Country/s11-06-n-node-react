import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news:[],
    post:[],
    newsDetail: [],
    put:[],
    comments: [],
};


const Slice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getNews: (state, action) => {
            state.news = action.payload;
            
        },
        postNews:(state, action) => {
            state.post = action.payload;
        },
        
        getDetailNews: (state, action) => {
            state.newsDetail = action.payload;
        },   
      
        modifyNews: (state, action) => {
            state.newsDetail = action.payload;
        },
        addCommentToNews: (state, action) => {
            const { newsId, comment } = action.payload;
            const newsToUpdate = state.news.find(news => news.id === newsId);
    
            if (newsToUpdate) {
                newsToUpdate.comments.push(comment);
            }
        },

    }
});

export const { getNews, postNews, getDetailNews, modifyNews, addCommentToNews } = Slice.actions;
export default Slice.reducer;