import React from "react";
import Showcase from "../Showcase/Showcase";
import FilterToggle from "../FilterToggle/FilterToggle";

import Section from "../../layout/Section/Section";

function Home(props) {
  const { movie, tv, current_filter, toggleFilter } = props;

  return (
    <>
      <Section background="#1b2631">
        <FilterToggle toggleFilter={toggleFilter} />
        <Showcase movie={movie} tv={tv} current_filter={current_filter} />
      </Section>
    </>
  );
}

export default Home;
