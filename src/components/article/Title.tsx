const Title = ({ title, slug }) => {
  return (
    <div className="pt-8 px-4" style={{ viewTransitionName: `title-${slug}` }}>
      <p className="sm:text-4xl text-3xl text-center font-medium">{title}</p>
    </div>
  );
};

export default Title;
