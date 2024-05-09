import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UpcomingSessonItem = {
    name: string;
    email: string;
    id: string;
    title: string;
    summary: string;
    date: string;
}

export type UpcomingSessonsState = {
    items: UpcomingSessonItem[]
}

const initialState: UpcomingSessonsState = {
    items: [] 
}

const upcomingSessionsSlice = createSlice({
    name: "upcomingSessons",
    initialState: initialState,
    reducers: {
        addSession:(state, actions: PayloadAction<UpcomingSessonItem>)=>{
            const itemIndex = state.items.findIndex(item=>item.id === actions.payload.id && item.email === actions.payload.email)
            
            if (itemIndex !== -1) {
                return
            }else{
                state.items.push({
                    ...actions.payload
                })
            }
        },
        removeSession: (state, actions: PayloadAction<string>)=>{
            const itemIndex = state.items.findIndex(item=>item.id === actions.payload)
            if (itemIndex != -1) {
                state.items.splice(itemIndex, 1)
            }
        },
    }
})

export const {addSession, removeSession} = upcomingSessionsSlice.actions
export default upcomingSessionsSlice.reducer