import { createSlice } from "@reduxjs/toolkit"

function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues)
}

function updateItemInArray(array, itemId, updateItemCallback) {
    const updatedItems = array.map(item => {
        if (item.id !== itemId) {
            return item
        }
        const updatedItem = updateItemCallback(item)
        return updatedItem
    })
    return updatedItems
}

const tasksSlice = createSlice({
    name: 'todos',
    initialState: {
        tasks: []
    },
    reducers:{
        addTask(state, action){
            const tasks = state.tasks.concat({
                text: action.payload.text,
                completed: false
            })
            return updateObject(state.tasks, { tasks })
        },
        toggleTask(state, action){
            const tasks = updateItemInArray(state.tasks, action.payload.id, task => {
                return updateObject(task, { completed: !task.completed })
            })
            return updateObject(state, { tasks })
        },
        editTask(state, action){
            const tasks = updateItemInArray(state.tasks, action.payload.id, task => {
                return updateObject(task, { text: action.payload.text })
            })
            return updateObject(state, { tasks })
        }
    }
})

export const { addTask, toggleTask, editTask } = tasksSlice.actions
export default tasksSlice.reducer