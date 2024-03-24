const Tags = ({ tags }) => {
  return (
    <div className="px-4">
      <div className="pt-4 border-t-2 flex items-center text-gray-700">
        <p>Tags: </p>
        <ul className="flex text-lg ml-2 items-center">
          {tags.map((tag, index) => (
            <li>
              {index !== 0 && ', '}
              <a href={`/tags/${tag}`}>{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tags;
