import React, { useEffect, useState } from 'react'
import axios from '../util/apiClient'


const OneTodo = () => {
  const [todos, setTodos] = useState([])

  const refreshTodos = async () => {
    const { data } = await axios.get('/todo')
    console.log('one todo:', data)
    setTodos(data)
  }

  useEffect(() => {
    refreshTodos()
  }, [])


  return (
    <div>
      <h1>Todo example</h1>
      <div>Hello todo page</div>
    </div>
  )
}

export default OneTodo
