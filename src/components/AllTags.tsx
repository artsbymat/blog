import { useState } from 'react';
import ListAllPosts from '@components/ListAllPosts';

const AllTags = ({ posts }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = [...new Set(posts.map((post) => post.data.tags).flat())];

  const handleTagChecked = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredPosts = posts.filter((post: any) =>
    post.data.tags.some((tag: string) => selectedTags.includes(tag))
  );

  return (
    <div>
      <ul className="px-4 my-4 flex gap-4 text-lg flex-wrap sm:justify-start justify-center">
        {tags.sort().map((tag) => (
          <li key={tag}>
            <input
              type="checkbox"
              id={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => handleTagChecked(tag)}
              className="hidden"
            />
            <label
              htmlFor={tag}
              className={`px-2 py-1 shadow-black shadow-sm border-2 border-black rounded hover:bg-gray-100 ${selectedTags.includes(tag) ? 'bg-gray-200' : 'bg-white'}`}
            >
              {tag}
            </label>
          </li>
        ))}
      </ul>

      {filteredPosts.length > 0 && <ListAllPosts posts={filteredPosts} />}
    </div>
  );
};

export default AllTags;
