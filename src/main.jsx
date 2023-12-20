import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList/>
  </React.StrictMode>,
)
