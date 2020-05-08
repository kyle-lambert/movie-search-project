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
