import './App.css'
import HeaderSection from './components/headerSection'
import ListSection from './components/listSection'

function App () {
  return (
    <div className='App'>
      <div className='h-screen overflow-hidden flex items-center justify-center bg-cyan-50'>
        <div className='h-100 w-full flex items-center justify-center font-sans'>
          <div className='bg-white rounded shadow-lg p-6 m-4 w-full lg:w-1/2 '>
            <HeaderSection />
            <ListSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
