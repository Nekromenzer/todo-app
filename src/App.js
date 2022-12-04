import React, { useState, useEffect } from 'react'
import './App.css'
import HeaderSection from './components/headerSection'
import UseDidMountEffect from './components/hooks/useDidMountEffect'
import ListSection from './components/listSection'

function App () {
  const [todoList, setTodoList] = useState([])
  const [filterVal, setFilterVal] = useState('all')

  // useEffect(() => {
  //   localStorage.setItem('todoList', JSON.stringify(todoList))
  // }, [todoList])

  UseDidMountEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])
  
  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem('todoList')))
  }, [])

  return (
    <div className='App'>
      <div className='h-screen overflow-hidden flex items-center justify-center bg-cyan-50'>
        <div className='h-100 w-full flex items-center justify-center font-sans'>
          <div className='bg-white rounded shadow-lg p-6 m-4 w-full lg:w-1/2 '>
            <HeaderSection
              setTodoList={setTodoList}
              filterVal={filterVal}
              setFilterVal={setFilterVal}
            />
            <ListSection
              todoList={todoList}
              setTodoList={setTodoList}
              filterVal={filterVal}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
