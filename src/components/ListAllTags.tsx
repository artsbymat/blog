const ListAllTags = ({ tags }) => {
  return (
    <div className="px-4 flex my-4 py-4">
      <ul className="flex gap-4 text-lg flex-wrap sm:justify-start justify-center">
        {tags.map((tag: string) => (
          <li key={tag}>
            <a
              href={`/tags/${tag}`}
              className="px-2 py-1 shadow-black shadow-sm border-2 border-black rounded"
            >
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListAllTags;
