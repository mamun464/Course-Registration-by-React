import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/course";
import './Courses.css'


const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);
    return (
        <div>
            <div className="course-container md:w-2/3 mb-10">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    >

                    </Course>)
                }
            </div>
        </div>
    );
};

export default Courses;