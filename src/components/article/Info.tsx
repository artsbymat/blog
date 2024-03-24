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

const Info = ({ date, modifiedDate, readingTime, words }) => {
  const formattedDate = formatDate(date);
  const formattedModifiedDate = formatDate(modifiedDate);
  return (
    <div>
      <div className="mt-4 flex flex-row justify-center gap-2 font-medium text-gray-500">
        <time>{formattedDate}</time>
        <span>/</span>
        <p>{Math.floor(readingTime)} min</p>
        <span>/</span>
        <p>{words} words</p>
      </div>
      {date.getTime() < modifiedDate.getTime() && (
        <div className="flex justify-center text-gray-500 font-medium mt-2">
          <time>
            <span>modified at </span>
            {formattedModifiedDate}
          </time>
        </div>
      )}
      <div className="my-10 h-2 w-10 bg-red-400 rounded flex mx-auto"></div>
    </div>
  );
};

export default Info;
