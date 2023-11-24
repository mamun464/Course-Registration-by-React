import PropTypes from 'prop-types';
import CourseList from '../../CourseList/CourseList';

const SidePanel = ({ courses, credit, remaining, prices }) => {
    return (
        <div className="md:w-full h-fit  bg-[#FFF] rounded-xl p-6" >
            <h1 className="text-[#2F80ED] text-[18px] font-bold mb-4">Credit Hour Remaining {remaining} hr</h1>
            <p className='border-b-2 mb-4'></p>
            <h1 className="text-[#1C1B1B] text-xl font-bold mb-5">Course Name</h1>

            {
                courses.map((course, index) => <CourseList
                    key={course.id}
                    index={index}
                    course={course}
                ></CourseList>)
            }

            <p className='border-b-2 mb-4'></p>
            <h1 className="text-[#1C1B1BCC] font-medium mb-4">Total Credit Hour : {credit}</h1>
            <p className='border-b-2 mb-4'></p>
            <h1 className="text-[#1C1B1BCC] font-semibold">Total Price : {prices} BDT</h1>

        </div>
    );
};

SidePanel.propTypes = {
    courses: PropTypes.array.isRequired,
    credit: PropTypes.number.isRequired,
    prices: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
    // handleAddToBookmarks: PropTypes.func,
    // handleReadingTime: PropTypes.func
}

export default SidePanel;