import { TbCurrencyTaka } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
import PropTypes from 'prop-types';

const Course = ({ course }) => {
    const { title, description, price_bdt, credit_hours, image } = course;
    return (
        <div className="bg-[#fff] p-4 rounded-xl">
            <img className="w-full" src={image} alt="No_Image_Found" />

            <h1 className="text-[#1C1B1B]  font-semibold mt-4 mb-1">{title}</h1>

            <p className="text-[#1B1B1B99] text-[14px] font-normal mb-5 h-[126px]">{description}</p>

            <div className="flex justify-between mb-6">

                <div className="flex items-center gap-1 font-medium text-[#1C1B1B]">

                    <TbCurrencyTaka />
                    <p className="text-[#1B1B1B99]">Price: {price_bdt}</p>

                </div>


                <div className="flex items-center gap-1 font-medium text-[#1C1B1B]">

                    <IoBookOutline />
                    <p className="text-[#1B1B1B99]">Credit : {credit_hours}hr</p>

                </div>
            </div>

            <button className="w-full text-[#fff] font-semibold text-[18px] bg-[#2F80ED] rounded-lg py-2 border border-solid border-blue-500  hover:bg-blue-600">Select</button>

        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    // handleAddToBookmarks: PropTypes.func,
    // handleReadingTime: PropTypes.func
}

export default Course;