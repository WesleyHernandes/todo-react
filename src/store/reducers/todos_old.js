const initialState = {
    visibilityState: "SHOW_ALL",
    tasks: []
}

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

function setVisibilityFilter(state, action){
    return updateObject(state, { visibilityFilter: action.filter })
}

function addTask(state, action){
    const newTask = state.tasks.concat({
        id: action.id,
        text: action.text,
        completed: false
    })
    return updateObject(state, { tasks: newTask })
}

function toggleTask(state, action){
    const newTask = updateItemInArray(state.tasks, action.id, task => {
        return updateObject(task, { completed: !task.completed })
    })
    return updateObject(state, { tasks: newTask })
}

function editTask(state, action){
    const newTask = updateItemInArray(state.tasks, action.id, task => {
        return updateObject(task, { text: action.text })
    })
    return updateObject(state, { tasks: newTask })
}

function visibilityReducer(visibilityState = "SHOW_ALL", action){
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return setVisibilityFilter(visibilityState, action)
        default:
            return visibilityState
    }
}

function tasksReducer(tasksState = [], action){
    switch (action.type) {
        case 'ADD_TASK':
            return addTask(tasksState, action)
        case 'TOGGLE_TASK':
            return toggleTask(tasksState, action)
        case 'EDIT_TASK':
            return editTask(tasksState, action)
        default:
            return tasksState
    }
}

export default function appReducer(state = initialState, action){
    return {
        tasks: tasksReducer(state.tasks, action),
        visibilityFilter: visibilityReducer(state.visibilityState, action)
    }
}