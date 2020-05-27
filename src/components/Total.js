import React from 'react';
import { connect } from "react-redux";


const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};


const mapStateToProps = state => {
  console.log("trying to find state in the total component", state)
  return {

    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  {}
)(Total);

