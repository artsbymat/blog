const PageTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="px-4 py-4">
        <p className="text-3xl font-medium">{title}</p>
      </div>
    </div>
  );
};

export default PageTitle;
