'use client'

import { PayloadAction, createSlice } from "@reduxjs/toolkit"
// Define a type for the slice state
type AppState= {
    isOpen: boolean;
    currentTab: string;
}
const intialState: AppState = {
    isOpen: false,
    currentTab:'about'
}

export const appSlice = createSlice({
    name: 'app',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: intialState,
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen
        },
         // Use the PayloadAction type to declare the contents of `action.payload`
        setCurrentTab: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            state.currentTab = action.payload
        }
    }
})

export const { toggle, setCurrentTab } = appSlice.actions
export default appSlice.reducer