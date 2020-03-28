import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Info.css";

class Information extends Component {
  render() {
    const { content } = this.props;

    const crew = content.crew.slice(0, 4).map(person => (
      <div key={uuidv4()} className="Info-crew-member">
        <div className="Info-crew-img-wrap">
          <img
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            alt={person.name}
            className="Info-crew-img"
          />
        </div>
        <div className="Info-crew-wrap">
          <p className="Info-crew-name">{person.name}</p>
          <p className="Info-crew-job">{person.job}</p>
        </div>
      </div>
    ));
    return (
      <div className="Info">
        <div className="Info-box">
          <h1 className="Info-title">{content.title}</h1>
          <div className="Info-sub">
            <p className="Info-sub-item">{`${content.runtime} mins`}</p>
            <p className="Info-sub-item">
              {content.genres.map(item => item.name).join(", ")}
            </p>
            <p className="Info-sub-item">{content.release_date}</p>
          </div>
          <p className="Info-overview">{content.overview}</p>
        </div>
        <div className="Info-crew">{crew}</div>
      </div>
    );
  }
}

export default Information;
