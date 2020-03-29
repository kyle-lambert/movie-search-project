export const formatString = str => {
  return str
    .replace("_", " ")
    .split(" ")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");
};

export const fetchData = async (media, type, id, key) => {
  if (type === "details") {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${media}/${id}?api_key=${key}&language=en-US`
      );
      const data = await res.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${media}/${id}/${type}?api_key=${key}`
      );
      const data = await res.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const buildCredits = credits => {
  if (credits) {
    const crew = credits.crew.filter(c => c.name && c.job);
    const cast = credits.cast.filter(
      c => c.character && c.name && c.profile_path
    );
    return {
      crew: crew,
      cast: cast
    };
  } else {
    return [];
  }
};
