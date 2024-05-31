import { createSlice , nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        { id: '1', text: 'todo1', completed: false, editing: false },
    ],
    editTodo: false
}


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state , action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            
            
            if(todo){
                todo.text = action.payload.text
            }
        },
        changeEdit: (state,action) => {
            state.editTodo = !state.editTodo
            const todo = state.todos.find(todo => todo.id === action.payload)
            if(todo){
                todo.editing = !todo.editing
            }
        }
    }
})

export const { addTodo, toggleTodo, deleteTodo , editTodo , changeEdit } = todoSlice.actions

export default todoSlice.reducer