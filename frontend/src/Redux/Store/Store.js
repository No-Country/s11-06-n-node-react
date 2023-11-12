import { configureStore } from '@reduxjs/toolkit';
import user from "../Actions/UserSlice"
import group from "../Actions/GroupSlice"
import news from "../Actions/NewsSlice"
import event from "../Actions/EventSlice"
import activity from "../Actions/ActivitySlice"
import flags from '../Actions/FlagsSlice';


const store = configureStore({
    reducer: {
       user: user,
       group: group,
       news: news,
       event: event,
       activity: activity,
        flags: flags
    },
});

export default store;