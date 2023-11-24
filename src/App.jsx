

import { useState } from 'react';
import './App.css'
import Courses from './Components/Courses/Courses';
import SidePanel from './Components/SidePanel/SidePanel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [prices, setPrices] = useState(0);

  const handleAddToList = (courseList) => {
    let isAlreadyExists = courses.some(course => course.id === courseList.id);
    if (isAlreadyExists) {
      toast.warn('Already Taken this course!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      let totalCredit = (courseList.credit_hours || 0) + credit
      let remainingCredit = remaining - (courseList.credit_hours || 0)
      let totalPrice = prices + (courseList.price_bdt || 0)
      // courses.reduce((sum, course) => sum + (course.credit_hours || 0), 0);

      if (totalCredit <= 20 && remainingCredit >= 0) {
        const newList = [...courses, courseList]
        setCourses(newList)
        setCredit(totalCredit)
        setRemaining(remainingCredit)
        setPrices(totalPrice)

      }
      else {
        toast.warn('Credit Limit cross!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }


    }

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
            credit={credit}
            remaining={remaining}
            prices={prices}
          ></SidePanel>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
