import { HiOutlineCalendar } from 'react-icons/hi2';
import { GoTag } from 'react-icons/go';

const RecentPost = () => {
  return (
    <div className="mt-5 px-4 py-2">
      <div className="flex items-center gap-5 text-gray-800">
        <div className="flex items-center gap-2">
          <HiOutlineCalendar size={25} />
          <p className="text-base">Thu, 21 April 2024</p>
        </div>
        <div className="flex items-center gap-2">
          <GoTag size={22} />
          <ul className="flex flex-wrap items-center text-base">
            <li className="">dolor</li>
            <li className="">,amet</li>
            <li className="">,ipsum</li>
          </ul>
        </div>
      </div>
      <div className="mt-2 text-2xl font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde
      </div>
      <div className="text-lg text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae? Maiores,
        explicabo quam recusandae aliquam qui ad ea libero culpa sunt labore molestiae tempore
        itaque doloribus illo quaerat quisquam placeat.
      </div>
    </div>
  );
};

export default RecentPost;
