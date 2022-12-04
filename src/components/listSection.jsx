import React from 'react'

const ListSection = () => {
  return (
    <>
      <div className='flex mb-4 items-center bg-green-50 px-3 py-1 border border-amber rounded cursor-pointer'>
        <p className='w-full text-grey-darkest'>
          Add another component to Tailwind Components
        </p>
        <button className='flex-no-shrink px-2 py-1 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-300'>
          ✔️
        </button>
        <button className='flex-no-shrink px-2 py-1 border-2 rounded text-red border-red hover:text-white hover:bg-red-600'>
          Delete
        </button>
      </div>
      <div className='flex mb-4 items-center bg-red-50 px-3 py-1 border border-amber rounded cursor-pointer'>
        <p className='w-full text-grey-darkest line-through'>
          Add another component to Tailwind Components
        </p>
        <button className='flex-no-shrink px-2 py-1 ml-4 mr-2 border-2 rounded hover:text-white text-green border-orange hover:bg-orange-300'>
          ❌
        </button>
        <button className='flex-no-shrink px-2 py-1 border-2 rounded text-red border-red hover:text-white hover:bg-red-600'>
          Delete
        </button>
      </div>
    </>
  )
}

export default ListSection
