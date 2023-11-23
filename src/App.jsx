

import { useState } from 'react';
import './App.css'
import Courses from './Components/Courses/Courses';
import SidePanel from './Components/SidePanel/SidePanel';

function App() {
  const [courses, setCourses] = useState([]);

  const handleAddToList = (courseList) => {
    const newList = [...courses, courseList]
    setCourses(newList)
    console.log(courses)
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-[#1C1B1B] font-bold text-3xl text-center mt-12 mb-8'>Course Registration</h1>
        <div className='md:flex gap-3'>
          <Courses
            handleAddToList={handleAddToList}
          ></Courses>
          <SidePanel
            courses={courses}
          ></SidePanel>
        </div>
      </div>
    </>
  )
}

export default App
