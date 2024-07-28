const reformatDate = (date) => {
  const monthMap = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const [day, month, year] = date
    .replace(/(\d+)(st|nd|rd|th)/, "$1")
    .split(" ");

  const dayTwoDigits = day.padStart(2, "0");
  const monthTwoDigits = monthMap[month];

  return `${year}-${monthTwoDigits}-${dayTwoDigits}`;
};

console.log(reformatDate("20th Oct 2052"));
