import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const PageNavigation = ({ url }) => {
  const { prev, next } = url;
  return (
    <div className={`px-4 my-8 flex gap-32 justify-center`}>
      {prev && (
        <a href={prev} className="flex items-center gap-2 hover:font-medium">
          <IoIosArrowDropleft size={22} />
          <p>Prev</p>
        </a>
      )}
      {next && (
        <a href={next} className="flex items-center gap-2 hover:font-medium">
          <IoIosArrowDropright size={22} />
          <p>Next</p>
        </a>
      )}
    </div>
  );
};

export default PageNavigation;
