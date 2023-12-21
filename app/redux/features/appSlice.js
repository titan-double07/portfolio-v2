'use client'

import { createSlice } from "@reduxjs/toolkit"

const intialState = {
    isOpen: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState: intialState,
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const { toggle } = appSlice.actions
export default appSlice.reducer