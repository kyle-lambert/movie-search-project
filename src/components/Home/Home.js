import React from "react";
import ShowcaseList from "../ShowcaseList/ShowcaseList";
import Showcase from "../Showcase/Showcase";
import FilterToggle from "../FilterToggle/FilterToggle";

import Section from "../../layout/Section/Section";
import Spacer from "../../layout/Spacer/Spacer";

function Home(props) {
  const { movie, tv, current_filter, toggleFilter } = props;

  return (
    <>
      <Section background="#1b2631">
        <FilterToggle
          toggleFilter={toggleFilter}
          current_filter={current_filter}
        />
        <ShowcaseList
          title="Popular"
          media_type={
            current_filter === "movie" ? movie.media_type : tv.media_type
          }
          category={current_filter === "movie" ? movie.popular : tv.popular}
        />
        <Spacer />
        <ShowcaseList
          title="Top Rated"
          media_type={
            current_filter === "movie" ? movie.media_type : tv.media_type
          }
          category={current_filter === "movie" ? movie.top_rated : tv.top_rated}
        />
        <Spacer />
        {current_filter === "movie" ? (
          <ShowcaseList
            title="Now Playing"
            media_type={movie.media_type}
            category={movie.now_playing}
          />
        ) : (
          <ShowcaseList
            title="On The Air"
            media_type={tv.media_type}
            category={tv.on_the_air}
          />
        )}
      </Section>
    </>
  );
}

export default Home;
