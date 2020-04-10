import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import DetailsShowcaseList from "../DetailsShowcaseList/DetailsShowcaseList";
import Poster from "../Poster/Poster";
import ContentInfo from "../ContentInfo/ContentInfo";

import Section from "../../layout/Section/Section";
import Spacer from "../../layout/Spacer/Spacer";
import Layout from "../../layout/Layout/Layout";
import HeaderLayout from "../../layout/HeaderLayout/HeaderLayout";

import "./Details.css";

function Details(props) {
  const { data, media_type } = props;
  const { details, credits, reviews, recommendations, similar } = data;
  let content;
  if (details.error) {
    content = <div>error</div>;
  } else if (details.loading) {
    content = <div>loading</div>;
  } else {
    content = (
      <>
        <Backdrop
          title={
            media_type === "movie" ? details.data.title : details.data.name
          }
          path={details.data.backdrop_path}
        />

        <Layout>
          <HeaderLayout>
            <Poster
              title={
                media_type === "movie" ? details.data.title : details.data.name
              }
              path={details.data.poster_path}
            />
            <ContentInfo data={details.data} media_type={media_type} />
          </HeaderLayout>
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
        </Layout>
      </>
    );
  }
  return <div className="Details">{content}</div>;
}

export default Details;
