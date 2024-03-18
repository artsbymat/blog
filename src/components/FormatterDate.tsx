const FormattedDate = ({ date }: { date: string }) => {
  const originalDate = new Date(date);

  const getDayName = (day: number): string => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day]!;
  };

  const getMonthName = (month: number): string => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return months[month]!;
  };

  const day = getDayName(originalDate.getUTCDay());
  const dateNumber = originalDate.getUTCDate();
  const month = getMonthName(originalDate.getUTCMonth());
  const year = originalDate.getUTCFullYear();

  const formattedDate = `${day}, ${dateNumber} ${month} ${year}`;

  return <span>{formattedDate}</span>;
};

export default FormattedDate;
