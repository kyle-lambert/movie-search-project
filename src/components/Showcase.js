import React, { Component } from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { formatString } from "../utilities";
import "../css/Showcase.css";
const API_KEY = process.env.REACT_APP_API_KEY;

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      isLoading: true
    };
    this.buildState = this.buildState.bind(this);
  }

  async componentDidMount() {
    const { media, time } = this.props;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/${media}/${time}?api_key=${API_KEY}`
      );
      const data = await res.json();
      if (data) {
        setTimeout(() => {
          this.setState({ content: this.buildState(data), isLoading: false });
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    }
  }

  buildState(data) {
    const { media } = this.props;
    if (data.results) {
      if (media === "tv") {
        const content = data.results.filter(
          item => item.name && item.id && item.poster_path && item.media_type
        );
        return content.map(item => {
          return {
            title: item.name,
            id: item.id,
            poster_path: item.poster_path,
            media_type: item.media_type
          };
        });
      } else if (media === "movies") {
        const content = data.results.filter(
          item => item.title && item.id && item.poster_path && item.media_type
        );
        return content.map(item => {
          return {
            title: item.title,
            id: item.id,
            poster_path: item.poster_path,
            media_type: item.media_type
          };
        });
      }
    } else {
      return [];
    }
  }

  render() {
    const { name, bg } = this.props;
    const { isLoading, content } = this.state;
    return (
      <div className="Showcase">
        <h2 className="Showcase-title">
          Trending:<span className="Showcase-span">{formatString(name)}</span>
        </h2>
        <div className="Showcase-grid">
          {isLoading ? (
            <div>LOADING</div>
          ) : (
            content.map((item, index) => (
              <Card key={uuidv4()} content={item} index={index} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Showcase;
