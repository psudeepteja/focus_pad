import { createSlice } from "@reduxjs/toolkit"

export const noteSlice = createSlice({
    name: "notes",
    initialState: {
        notes: [],
        completedTasks: []
    },
    reducers: {
        noteDetails: (state, action) => {
            state.notes.unshift(action.payload)
        },
        editNotes: (state, action) => {
            const { id } = action.payload
            state.notes = state.notes.map((item) => (
                item.id === id ? action.payload : item
            ))
        },
        deleteNotes: (state, action) => {
            state.notes = state.notes.filter((item) => (
                action.payload !== item.id
            ))
        },
        completedNotes: (state, action) => {
            console.log("paylod", action.payload)
            state.completedTasks = state.completedTasks.concat(action.payload)
            state.notes = state.notes.filter((i) => (
                i.id !== action.payload.id
            ))
        },
        resetNotes: (state, action) => {
            state.completedTasks = state.completedTasks.filter(i => (
                i.id !== action.payload.id
            ))
            state.notes = state.notes.concat(action.payload)
        },
        searchNotes:(state, action)=>{
            console.log("action", action)
            if(action?.payload?.notesType === "Note List"){
                state.notes = state.notes.filter(i=>
                    (i.title || i.description).includes(action.payload.value) 
                )
            }
        }
    }
})
export const { noteDetails, editNotes, deleteNotes, completedNotes, resetNotes, searchNotes } = noteSlice.actions
export default noteSlice.reducer 