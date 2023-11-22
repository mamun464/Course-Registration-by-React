

import './App.css'
import Courses from './Components/Courses/Courses';

function App() {


  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-[#1C1B1B] font-bold text-3xl text-center mt-12 mb-8'>Course Registration</h1>
        <div className='md:flex'>
          <Courses></Courses>
        </div>
      </div>
    </>
  )
}

export default App
