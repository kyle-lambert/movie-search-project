export const guardCredits = (data, activeTab) => {
  return (
    data &&
    data.credits &&
    data.credits[activeTab] &&
    Array.isArray(data.credits[activeTab]) &&
    data.credits[activeTab].length > 0
  );
};

export const guardSimilar = (data) => {
  return (
    data &&
    data.similar &&
    data.similar.results &&
    Array.isArray(data.similar.results) &&
    data.similar.results.length > 0
  );
};

export const guardRecommendations = (data) => {
  return (
    data &&
    data.recommendations &&
    data.recommendations.results &&
    Array.isArray(data.recommendations.results) &&
    data.recommendations.results.length > 0
  );
};

export const guardPersonMovieCredits = (data) => {
  return (
    data &&
    data.movie_credits &&
    data.movie_credits.cast &&
    Array.isArray(data.movie_credits.cast) &&
    data.movie_credits.cast.length > 0
  );
};
export const guardPersonTvCredits = (data) => {
  return (
    data &&
    data.tv_credits &&
    data.tv_credits.cast &&
    Array.isArray(data.tv_credits.cast) &&
    data.tv_credits.cast.length > 0
  );
};
