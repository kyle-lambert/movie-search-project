import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import DetailsShowcaseList from "../DetailsShowcaseList/DetailsShowcaseList";
import PersonShowcaseList from "../PersonShowcaseList/PersonShowcaseList";
import Poster from "../Poster/Poster";
import ContentInfo from "../ContentInfo/ContentInfo";

import Section from "../../layout/Section/Section";
import Spacer from "../../layout/Spacer/Spacer";
import Layout from "../../layout/Layout/Layout";
import HeaderLayout from "../../layout/HeaderLayout/HeaderLayout";

import "./Details.css";

function Details(props) {
  const { data, media_type } = props;
  const {
    details,
    credits,
    reviews,
    recommendations,
    similar,
    tv_credits,
    movie_credits,
  } = data;
  let content;
  if (details.error) {
    content = <div>error</div>;
  } else if (details.loading) {
    content = <div>loading</div>;
  } else {
    switch (media_type) {
      case "movie":
      case "tv":
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
                    media_type === "movie"
                      ? details.data.title
                      : details.data.name
                  }
                  path={details.data.poster_path}
                />
                <ContentInfo data={details.data} media_type={media_type} />
              </HeaderLayout>
              <Section background="#AEB6BF">
                <PersonShowcaseList
                  title="Top Billed Cast"
                  items_array={credits.data.cast}
                  loading={credits.loading}
                  error={credits.error}
                />
              </Section>
              <Section background="#1b2631">
                <DetailsShowcaseList
                  title="Recommendations"
                  media_type={media_type}
                  items_array={recommendations.data.results}
                  loading={recommendations.loading}
                  error={recommendations.error}
                />
                <Spacer />
                <DetailsShowcaseList
                  title="Similar"
                  media_type={media_type}
                  items_array={similar.data.results}
                  loading={similar.loading}
                  error={similar.error}
                />
              </Section>
            </Layout>
          </>
        );
        break;

      case "person":
        content = (
          <>
            <HeaderLayout>
              <Poster
                title={details.data.name}
                path={details.data.profile_path}
              />
            </HeaderLayout>
            <Section background="#1b2631">
              <DetailsShowcaseList
                title={`Movies with ${details.data.name}...`}
                media_type="movie"
                items_array={movie_credits.data.cast}
                loading={movie_credits.loading}
                error={movie_credits.error}
              />
              <Spacer />
              <DetailsShowcaseList
                title={`TV Shows with ${details.data.name}...`}
                media_type="tv"
                items_array={tv_credits.data.cast}
                loading={tv_credits.loading}
                error={tv_credits.error}
              />
            </Section>
          </>
        );
      default:
        break;
    }
  }
  return <div className="Details">{content}</div>;
}

export default Details;
