import { configureStore } from "@reduxjs/toolkit";
import  upcomingSessionsSlice from "./upcoming_sessions/upcoming-sessions-slice";

export const store = configureStore({
    reducer:{
        upcomingSessions: upcomingSessionsSlice
    } 
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch