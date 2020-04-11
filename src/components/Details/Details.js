import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Showcase from "../Showcase/Showcase";
import PersonShowcase from "../PersonShowcase/PersonShowcase";
import Poster from "../Poster/Poster";
import ContentCard from "../ContentCard/ContentCard";
import ContentInfo from "../ContentInfo/ContentInfo";
import PersonCard from "../PersonCard/PersonCard";
import PersonInfo from "../PersonInfo/PersonInfo";

import { v4 as uuidv4 } from "uuid";

import Section from "../../layout/Section/Section";
import ColorSection from "../../layout/ColorSection/ColorSection";
import Spacer from "../../layout/Spacer/Spacer";
import Layout from "../../layout/Layout/Layout";
import HeaderLayout from "../../layout/HeaderLayout/HeaderLayout";
import Track from "../../layout/Track/Track";

import "./Details.css";

const guard = {
  credits: (obj) =>
    obj &&
    obj.data &&
    obj.data.cast &&
    Array.isArray(obj.data.cast) &&
    obj.data.cast.length > 0,
  recommendations: (obj) =>
    obj &&
    obj.data &&
    obj.data.results &&
    Array.isArray(obj.data.results) &&
    obj.data.results.length > 0,
  similar: (obj) =>
    obj &&
    obj.data &&
    obj.data.results &&
    Array.isArray(obj.data.results) &&
    obj.data.results.length > 0,
};

function Details(props) {
  const { data, media_type } = props;
  const { details, credits, recommendations, similar, reviews } = data;

  const renderPersonShowcase = (credits) => {
    if (guard.credits(credits)) {
      return (
        <Track height="300px" min_height="300px">
          {credits.data.cast.map((person) => (
            <PersonCard key={uuidv4()} person={person} />
          ))}
        </Track>
      );
    } else {
      return <div>Sorry we can't find any cast members.</div>;
    }
  };

  const renderRecommendationsShowcase = (recommendations) => {
    if (guard.recommendations(recommendations)) {
      return (
        <Track height="375px" min_height="375px">
          {recommendations.data.results.map((item) => (
            <ContentCard key={uuidv4()} item={item} media_type={media_type} />
          ))}
        </Track>
      );
    } else {
      return <div>Sorry, we can't find any recommendations.</div>;
    }
  };

  const renderSimilarShowcase = (similar) => {
    if (guard.similar(similar)) {
      return (
        <Track height="375px" min_height="375px">
          {similar.data.results.map((item) => (
            <ContentCard key={uuidv4()} item={item} media_type={media_type} />
          ))}
        </Track>
      );
    } else {
      return <div>Sorry we can't find any similar content.</div>;
    }
  };

  const backdropJSX = () => {
    switch (media_type) {
      case "movie":
        return (
          <Backdrop
            title={details.data.title}
            path={details.data.backdrop_path}
          />
        );
      case "tv":
        return (
          <Backdrop
            title={details.data.name}
            path={details.data.backdrop_path}
          />
        );
      case "person":
        return null;

      default:
        return null;
    }
  };

  const headerJSX = () => {
    switch (media_type) {
      case "movie":
        return (
          <HeaderLayout>
            <Poster
              title={details.data.title}
              path={details.data.poster_path}
            />
            <ContentInfo data={details.data} media_type={media_type} />
          </HeaderLayout>
        );
      case "tv":
        return (
          <HeaderLayout>
            <Poster title={details.data.name} path={details.data.poster_path} />
            <ContentInfo data={details.data} media_type={media_type} />
          </HeaderLayout>
        );
      case "person":
        return (
          <HeaderLayout>
            <Poster
              title={details.data.name}
              path={details.data.profile_path}
            />
            <PersonInfo bio={details.data.biography} name={details.data.name} />
          </HeaderLayout>
        );

      default:
        return null;
    }
  };

  const getPageJSX = () => {
    if (data.details.error) return <div>ERROR</div>;
    if (data.details.loading) return <div>LOADING</div>;
    let page;
    if (media_type === "person") {
      page = <>{headerJSX()}</>;
    } else {
      page = (
        <>
          {backdropJSX()}
          <Layout>
            {headerJSX()}
            <ColorSection>
              <PersonShowcase
                title="Top Billed Cast"
                render={() => renderPersonShowcase(credits)}
              />
            </ColorSection>
            {/* <Section background="#AEB6BF">
              <PersonShowcase
                title="Top Billed Cast"
                render={() => renderPersonShowcase(credits)}
              />
            </Section> */}
            <Section background="#1b2631">
              <Showcase
                title="Recommendations"
                render={() => renderRecommendationsShowcase(recommendations)}
              />
              <Spacer />
              <Showcase
                title="Similar"
                render={() => renderSimilarShowcase(similar)}
              />
            </Section>
          </Layout>
        </>
      );
    }
    return page;
  };

  return <div className="Details">{getPageJSX()}</div>;
}

export default Details;
