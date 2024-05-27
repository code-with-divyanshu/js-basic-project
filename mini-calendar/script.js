const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const today = new Date();

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const allMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonth[today.getMonth()];
year.innerHTML = today.getFullYear();
