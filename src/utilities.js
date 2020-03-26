export const formatString = str => {
  return str
    .replace("_", " ")
    .split(" ")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");
};
