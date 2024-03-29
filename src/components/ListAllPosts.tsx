const AllPosts = ({ posts }) => {
  const uniqueYears = [...new Set(posts.map((post) => post.data.publishDate.getFullYear()))];
  return (
    <div className="px-4">
      <div>
        {uniqueYears.map((year) => (
          <div key={year}>
            <h2 className="pt-4 text-2xl font-medium" key={year}>
              {year}
            </h2>
            <div className="my-4">
              <div className="">
                {posts
                  .filter((post) => post.data.publishDate.getFullYear() === year)
                  .map((post) => {
                    const formattedDate = new Date(post.data.publishDate)
                      .toISOString()
                      .split('T')[0];
                    return (
                      <div key={post.slug} className="my-8">
                        <h3
                          className="text-xl"
                          style={{ viewTransitionName: `title-${post.slug}` }}
                        >
                          <a href={`/posts/${post.slug}`}>{post.data.title}</a>
                        </h3>
                        <time className="text-gray-600">{formattedDate}</time>
                        <p className="text-gray-800 mt-2">{post.data.description}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
