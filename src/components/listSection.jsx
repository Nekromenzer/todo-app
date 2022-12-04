import React from 'react'

const ListSection = ({ todoList, setTodoList }) => {
  const handleComplete = id => {
    const taskListCopy = [...todoList]
    const makeComplete = taskListCopy.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    )
    setTodoList(makeComplete)
  }

  const handleDelete = id => {
    const taskListCopy = [...todoList]
    const makeDelete = taskListCopy.filter(item => item.id !== id && item)
    setTodoList(makeDelete)
  }

  return (
    <>
      {todoList?.map((item, index) => (
        <div
          className={`flex mb-4 items-center ${
            !item.isCompleted ? 'bg-green-50' : 'bg-red-50'
          } px-3 py-1 border border-amber rounded cursor-pointer`}
          key={`${item.id}_${index}`}
        >
          <span className='mr-4 font-bold text-sm'>{index + 1}.</span>
          <p
            className={`w-full text-grey-darkest ${
              item.isCompleted && 'line-through'
            }`}
          >
            {item.task}
          </p>
          <button
            className={`flex-no-shrink px-2 py-1 ml-4 mr-2 border-2 rounded ${
              item.isCompleted
                ? 'border-orange hover:bg-orange-300'
                : 'border-green hover:bg-green-300'
            }`}
            onClick={() => handleComplete(item.id)}
          >
            {!item.isCompleted ? '✔️' : '❌'}
          </button>
          <button
            className='flex-no-shrink px-2 py-1 border-2 rounded text-red border-red hover:text-white hover:bg-red-600'
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  )
}

export default ListSection
