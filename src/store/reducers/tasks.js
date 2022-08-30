import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from 'uuid'

const tasksSlice = createSlice({
    name: 'todos',
    initialState: {
        inputText: '',
        list:[]
    },
    reducers:{
        setText(state, action){
            return {...state, inputText:action.payload}
        },
        addTask(state, action){
            const list = state.list.concat({
                id: uuid(),
                text: action.payload.text,
                completed: false
            })
            localStorage.setItem("todoList", JSON.stringify(list))
            return Object.assign({}, state, { list })
        },
        toggleDone(state, action){
            const tasks = JSON.parse(localStorage.getItem("todoList"))

            tasks.map((task, i) => {
                if(task.id === action.payload.id){
                    tasks[i] = { ...task, completed:!task.completed }
                    return task
                }
                return task
            })

            localStorage.setItem("todoList", JSON.stringify(tasks))
            return Object.assign({}, state, { list:tasks })
        },
        deleteTask(state, action){
            const tasks = JSON.parse(localStorage.getItem("todoList"))

            tasks.map((task, i) => {
                if(task.id === action.payload.id){
                    tasks.splice(i,1)
                    return task
                }
                return task
            })

            localStorage.setItem("todoList", JSON.stringify(tasks))
            return Object.assign({}, state, { list:tasks })
        },
        refresh(state, action){
            const todo = localStorage.getItem("todoList")
            const inputText = (action.payload && action.payload.inputText) ? action.payload.inputText : ''
            const list = (todo) ? JSON.parse(todo) : []
            return { ...state, inputText, list }
        }
    }
})

export const { setText, addTask, toggleDone, deleteTask, refresh } = tasksSlice.actions
export default tasksSlice.reducer