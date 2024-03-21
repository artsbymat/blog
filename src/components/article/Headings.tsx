const Heading = (props) => {
  const { level, children } = props;
  const headingId = children.props.value.toLowerCase().replace(/\s+/g, '-');

  const Tag = `h${level}`;

  return (
    <>
      <Tag id={headingId}>
        <a href={`#${headingId}`}>{children}</a>
      </Tag>
    </>
  );
};

export const H1 = ({ children }) => <Heading level={1}>{children}</Heading>;
export const H2 = ({ children }) => <Heading level={2}>{children}</Heading>;
export const H3 = ({ children }) => <Heading level={3}>{children}</Heading>;
export const H4 = ({ children }) => <Heading level={4}>{children}</Heading>;
export const H5 = ({ children }) => <Heading level={5}>{children}</Heading>;
export const H6 = ({ children }) => <Heading level={6}>{children}</Heading>;
