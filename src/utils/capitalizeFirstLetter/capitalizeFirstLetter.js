export default function capitalizeFirstLetter(str) {
  const lowStr = str.toLowerCase();

  const formatStr = lowStr
    .split(" ")
    .map((el) => {
      if (el != "&") return el[0].toUpperCase() + el.slice(1);
      return el;
    })
    .join(" ");

  return formatStr;
}
