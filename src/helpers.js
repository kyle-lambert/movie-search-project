export const formatStr = (str) => {
  return str
    .replace("_", " ")
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
};

export const truncateStr = (str, length = 100) => {
  return str.length > length
    ? str.split("").slice(0, length).join("") + " ..."
    : str;
};

export const filterGenres = (genres, ids) => {
  const idSet = new Set(ids);
  return genres
    .filter((genre) => idSet.has(genre.id))
    .map((genre) => genre.name)
    .join(", ");
};
