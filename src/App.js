import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total'; 
import { connect } from 'react-redux';
import { add, remove } from './actions';

const App = (props) => {
  const state = props.b;

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.remove(item)
  };

  const addFeature = item => {
    // dispatch an action here to add an item
    props.add(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} addFeature={addFeature}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) =>{
  return {b: state}
}
export default connect (mapStateToProps, {add, remove})(App);
