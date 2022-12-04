import React from 'react'

const HeaderSection = () => {
  return (
    <div className='mb-8'>
      <h1 className='text-grey-darkest text-3xl'>Todo List</h1>
      <div className='flex mt-4 gap-5'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3  text-grey-darker'
          placeholder='Add Todo'
        />
        <button className='p-2 border-2 rounded text-teal-900 border-teal hover:text-white hover:bg-teal-700 bg-teal'>
          Add
        </button>
        <select className='shadow appearance-none border rounded py-2 px-3  text-grey-darker flex-no-grow'>
          <option>All</option>
          <option>Completed</option>
          <option>Not completed</option>
        </select>
      </div>
    </div>
  )
}

export default HeaderSection
