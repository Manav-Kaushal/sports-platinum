function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTime(timeStamp, type) {
  if (!timeStamp) return null;
  const tmp = new Date(timeStamp);
  switch (type) {
    case "toDate":
      return tmp.toDateString();
    default:
      return tmp.toLocaleString();
  }
}

export { toCapitalize, getTime };
