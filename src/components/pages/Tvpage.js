import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getTvDetails,
  resetTvDetails,
} from "../../store/actions/tvDetailsActions";

class Tvpage extends Component {
  componentDidMount() {
    this.props.getTvDetails(this.props.tvId);
  }

  componentWillUnmount() {
    this.props.resetTvDetails();
  }

  render() {
    const { results, loading, error } = this.props.tvDetails;

    if (loading) return <div>loading</div>;
    return (
      <>
        <div>{results.name}</div>
        <div>id: {results.id}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tvDetails: state.tvDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTvDetails: (tvId) => dispatch(getTvDetails(tvId)),
    resetTvDetails: () => dispatch(resetTvDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tvpage);
