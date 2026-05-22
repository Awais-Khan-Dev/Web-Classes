import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function TodoUI() {
  const sampleTodos = [
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build a Todo App', done: true },
    { id: 3, text: 'Practice Tailwind CSS', done: false },
  ]

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/todos")
  },[])


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 overflow-hidden">
        {/* Header */}
        <header className="px-6 py-5 border-b border-gray-100">
          <h1 className="text-2xl font-semibold text-gray-800">Todo App</h1>
          <p className="text-sm text-gray-500">Simple todo list with checkboxes</p>
        </header>

        {/* Input */}
        <div className="px-6 py-4 flex gap-3">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            readOnly
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" disabled>
            Add
          </button>
        </div>

        {/* Todo List */}
        <main className="px-6 pb-4">
          <ul className="divide-y divide-gray-100">
            {sampleTodos.map(todo => (
              <li key={todo.id} className="flex items-center justify-between py-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    readOnly
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className={`${todo.done ? 'line-through text-gray-400' : 'text-gray-800'}`}>{todo.text}</span>
                </label>
                <button className="p-1 rounded hover:bg-gray-100" aria-label="delete">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v1h12V4a2 2 0 00-2-2H6zM5 7v9a2 2 0 002 2h6a2 2 0 002-2V7H5z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}