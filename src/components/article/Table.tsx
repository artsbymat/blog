const Table = (props) => {
  return (
    <div className="overflow-x-auto py-8">
      <table>{props.children}</table>
    </div>
  );
};

export default Table;
