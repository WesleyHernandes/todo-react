import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/tasks'
import visibilityReducer from './reducers/visibility'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        visibility: visibilityReducer
    }
})
