import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getPersonDetails,
  resetPersonDetails,
} from "../../store/actions/personDetailsActions";

import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import Person from "../Person/Person";

class PersonContainer extends Component {
  componentDidMount() {
    this.props.resetPersonDetails();
    this.props.getPersonDetails(this.props.contentId);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.routeProps.match.params.id !==
      nextProps.routeProps.match.params.id
    ) {
      this.props.resetPersonDetails();
      this.props.getPersonDetails(nextProps.routeProps.match.params.id);
    }
  }

  render() {
    const { loading, error, data } = this.props.personDetails;
    if (loading) return <LoadingScreen />;
    if (error) return <ErrorScreen />;
    return <Person data={data} history={this.props.history} />;
  }
}

const mapStateToProps = (state) => {
  return {
    personDetails: state.personDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonDetails: (contentId) => dispatch(getPersonDetails(contentId)),
    resetPersonDetails: () => dispatch(resetPersonDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);
