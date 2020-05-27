import React from 'react';
import updateFeatures from "../actions/addFeatureAction";
import { connect } from "react-redux";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {/* <button onClick={updateFeatures} className="button">Add</button> */}
      <button onClick={() => props.updateFeatures(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = () => {
  return {}
  // why return empty object?
}

export default connect(
  mapStateToProps,
  { updateFeatures }
)(AdditionalFeature);
