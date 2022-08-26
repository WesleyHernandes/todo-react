import { createSlice } from "@reduxjs/toolkit"

const visibilitySlice = createSlice({
    name: 'visibility',
    initialState: 'SHOW_ALL',
    reducers: {
        setVisibilityFilter(state, action){
            return Object.assign({}, state, { visibilityFilter: action.filter })
        }
    }
})

export const { setVisibilityFilter } = visibilitySlice.actions
export default visibilitySlice.reducer