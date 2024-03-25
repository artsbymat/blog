import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const AnotherPost = ({ prevPost, nextPost }) => {
  return (
    <div className={`px-4 my-8 flex gap-32 justify-center items-center`}>
      {prevPost && (
        <a href={`/posts/${prevPost}`} className="flex items-center gap-2 hover:font-medium">
          <IoIosArrowDropleft size={22} />
          <p>Prev</p>
        </a>
      )}
      {nextPost && (
        <a href={`/posts/${nextPost}`} className="flex items-center gap-2 hover:font-medium">
          <p>Next Post</p>
          <IoIosArrowDropright size={22} />
        </a>
      )}
    </div>
  );
};

export default AnotherPost;
