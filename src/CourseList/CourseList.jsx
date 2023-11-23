
import PropTypes from 'prop-types';
const CourseList = ({ course, index }) => {
    const { title } = course;

    return (
        <div>
            <h1 className='text-[#1C1B1BCC] font-normal mb-2'>{index + 1}. {title}</h1>
        </div>
    );
};

CourseList.propTypes = {
    course: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    // handleAddToBookmarks: PropTypes.func,
    // handleReadingTime: PropTypes.func
}

export default CourseList;