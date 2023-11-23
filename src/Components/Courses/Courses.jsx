import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/course";
import './Courses.css'
import PropTypes from 'prop-types';


const Courses = ({ handleAddToList }) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);
    return (
        <div>
            <div className="mb-10 course-container ">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        handleAddToList={handleAddToList}
                    >

                    </Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes = {

    handleAddToList: PropTypes.func,
    // handleReadingTime: PropTypes.func
}

export default Courses;