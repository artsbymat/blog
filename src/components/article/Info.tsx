const formatMonth = (month) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  return months[month];
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = formatMonth(date.getMonth());
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const Info = ({ date, readingTime, words }) => {
  const formattedDate = formatDate(date);
  return (
    <div className="my-4">
      <div className="my-8 flex flex-row justify-center gap-2 font-medium text-gray-500">
        <time>{formattedDate}</time>
        <span>/</span>
        <p>{Math.floor(readingTime)} min</p>
        <span>/</span>
        <p>{words} words</p>
      </div>
      <div className="h-2 w-10 bg-red-400 rounded flex mx-auto"></div>
    </div>
  );
};

export default Info;
