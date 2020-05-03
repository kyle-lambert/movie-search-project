import { movieGenres, tvGenres } from "./genres";

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

export const filterGenres = (type, ids) => {
  const idSet = new Set(ids);
  switch (type) {
    case "movie":
      return movieGenres
        .filter((genre) => idSet.has(genre.id))
        .map((genre) => genre.name)
        .slice(0, 3)
        .join(", ");
    case "tv":
      return tvGenres
        .filter((genre) => idSet.has(genre.id))
        .map((genre) => genre.name)
        .slice(0, 3)
        .join(", ");
    default:
      return "No genres";
  }
};
