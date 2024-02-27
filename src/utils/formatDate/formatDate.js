export default function formatDate(date = new Date()) {
  let day = date.getDate();
  let month = date.getMonth() + 1;

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  return `${date.getFullYear()}${month}${day}`;
}
