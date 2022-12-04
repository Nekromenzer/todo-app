import './App.css'

function App () {
  return (
    <div className='App'>
     <div className='h-screen overflow-hidden flex items-center justify-center bg-cyan-50'>
        <div className='h-100 w-full flex items-center justify-center font-sans'>
          <div className='bg-white rounded shadow-lg p-6 m-4 w-full lg:w-1/2 '>
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
            <div>
              <div className='flex mb-4 items-center bg-green-50 px-3 py-1 border border-amber rounded cursor-pointer'>
                <p className='w-full text-grey-darkest'>
                  Add another component to Tailwind Components
                </p>
                <button className='flex-no-shrink px-2 py-1 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green'>
                  ✔️
                </button>
                <button className='flex-no-shrink px-2 py-1 border-2 rounded text-red border-red hover:text-white hover:bg-red'>
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
                <button className='flex-no-shrink px-2 py-1 border-2 rounded text-red border-red hover:text-white hover:bg-red'>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
