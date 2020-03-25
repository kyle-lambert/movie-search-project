export const formatString = name => {
  return name
    .replace("_", " ")
    .split(" ")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");
};

export const buildMovieState = data => {
  if (data.results) {
    const movies = data.results.filter(
      d => d.backdrop_path && d.id && d.title && d.poster_path
    );
    return movies.length > 10 ? movies.slice(0, 10) : movies;
  } else {
    return [];
  }
};
