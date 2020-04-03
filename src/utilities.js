export const formatString = str => {
  return str
    .replace("_", " ")
    .split(" ")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");
};

export const truncateString = (str, length = 100) => {
  return str.length > length
    ? str
        .split(" ")
        .slice(0, length)
        .join(" ") + " ..."
    : str;
};
