import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getTvDetails,
  resetTvDetails,
} from "../../store/actions/tvDetailsActions";

import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import TV from "../TV/TV";

class TVContainer extends Component {
  componentDidMount() {
    this.props.resetTvDetails();
    this.props.getTvDetails(this.props.contentId);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.routeProps.match.params.id !==
      nextProps.routeProps.match.params.id
    ) {
      this.props.resetTvDetails();
      this.props.getTvDetails(nextProps.routeProps.match.params.id);
    }
  }

  render() {
    const { loading, error, data } = this.props.tvDetails;
    if (loading) return <LoadingScreen />;
    if (error) return <ErrorScreen />;
    return <TV data={data} history={this.props.history} />;
  }
}

const mapStateToProps = (state) => {
  return {
    tvDetails: state.tvDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTvDetails: (contentId) => dispatch(getTvDetails(contentId)),
    resetTvDetails: () => dispatch(resetTvDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TVContainer);
