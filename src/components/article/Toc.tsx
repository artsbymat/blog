const Toc = ({ headings }) => {
  function buildHierarchy(headings) {
    const toc = [];
    const parentHeadings = new Map();

    if (!headings) return toc;

    headings.forEach((h) => {
      const heading = { ...h, subheadings: [] };

      if (heading.text === 'Footnotes') return;
      if (heading.depth === 1) {
        toc.push(heading);
      } else if (heading.depth === 2) {
        const parentHeading = parentHeadings.get(heading.depth - 1);
        if (parentHeading) {
          parentHeading.subheadings.push(heading);
        }
      } else if (heading.depth === 3) {
        const parentHeading = parentHeadings.get(heading.depth - 2);
        if (parentHeading) {
          parentHeading.subheadings.push(heading);
        }
      }

      parentHeadings.set(heading.depth, heading);
    });
    return toc;
  }
  return (
    <div className="px-4 lg:mt-4 my-8 lg:sticky lg:top-4 lg:h-screen">
      <div className="p-2 border-gray-500 border-2 rounded-md">
        <div className="p-2">
          <p className="text-2xl font-medium text-gray-800">Table Of Contents</p>
        </div>
        <ol>
          {buildHierarchy(headings).map((h) => (
            <li key={h.slug} className="ml-8 text-[1.1rem] text-gray-800 list-decimal">
              <a href={`#${h.slug}`} className="hover:underline">
                {h.text}
              </a>
              {h.subheadings.length > 0 && (
                <ul className="">
                  {h.subheadings.map((sh) => (
                    <li
                      key={sh.slug}
                      className={`hover:underline list-disc ${sh.depth === 2 && 'ml-6'} ${sh.depth === 3 && 'ml-12'}`}
                    >
                      <a href={`#${sh.slug}`}>{sh.text}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Toc;
