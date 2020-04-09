import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import DetailsShowcaseList from "../DetailsShowcaseList/DetailsShowcaseList";

import Section from "../../layout/Section/Section";
import Spacer from "../../layout/Spacer/Spacer";

function Details(props) {
  const { data, media_type } = props;
  const { details, credits, reviews, recommendations, similar } = data;
  return (
    <>
      <Backdrop
        title={media_type === "movie" ? details.data.title : details.data.name}
        path={details.data.backdrop_path}
        loading={details.loading}
        error={details.error}
      />
      <Section background="#1b2631">
        <DetailsShowcaseList
          title="Recommendations"
          media_type={media_type}
          category={recommendations}
        />
        <Spacer />
        <DetailsShowcaseList
          title="Similar"
          media_type={media_type}
          category={similar}
        />
      </Section>
    </>
  );
}

export default Details;
