import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, changeEdit, editTodo } from '../features/Todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const btnref = useRef(null)
    const dispatch = useDispatch()
    const Todos = useSelector(state => state.todos)
    const editing = useSelector(state => state.editTodo)

    const addTodoHandler = (e) =>{
      e.preventDefault()
      const todo = Todos.find(todo => todo.editing === true)
        if(todo){
          dispatch(changeEdit(todo.id))
          dispatch(editTodo({id: todo.id, text: input}))
        }
        else{
          dispatch(addTodo(input))

        }
        setInput("")
    }
    useEffect(() => {
      const todo =Todos.find(todo => todo.editing === true)
      if(todo){
        setInput(todo.text)
        btnref.current.innerText = "Edit Todo"
      }
      else{
        setInput("")
        btnref.current.innerText = "Add Todo"
      }
    }, [editing])

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            ref={btnref}
          >
            Add Todo
          </button>
        </form>
      )
}

export default AddTodo
