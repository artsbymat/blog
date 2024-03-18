import { HiOutlineCalendar } from 'react-icons/hi2';
import { GoTag } from 'react-icons/go';
import FormatterDate from '@components/FormatterDate';
import { CiGlobe } from 'react-icons/ci';

const RecentPost = ({
  slug,
  title,
  publishDate,
  description,
  tags,
  isDraft
}: {
  slug: string;
  title: string;
  publishDate: Date;
  description: string;
  tags: string[];
  isDraft: boolean;
}) => {
  return (
    <div className="mt-5 px-4 py-2">
      <div className="flex items-center gap-5 text-gray-800">
        <div className="flex items-center gap-2">
          <HiOutlineCalendar size={25} />
          <p className="text-base">
            <FormatterDate date={publishDate} />
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GoTag size={22} />
          <ul className="flex flex-wrap items-center text-base">
            {tags.slice(0, 3).map((tag, index) => (
              <li key={index}>
                {index !== 0 && ','}
                <a href={`/tags/${tag}`}>{tag}</a>
              </li>
            ))}
          </ul>
        </div>
        {isDraft && (
          <div className="flex items-center gap-2 text-red-500">
            <CiGlobe size={22} />
            <p>Draft</p>
          </div>
        )}
      </div>
      <div className="mt-2 text-2xl font-medium">
        <a href={`/posts/${slug}`}>{title}</a>
      </div>
      <div className="text-lg text-gray-700">{description}</div>
    </div>
  );
};

export default RecentPost;
