import React from 'react';
import MartaDashContainer from './MartaDashContainer';

const MartaApp = (props) => {
  let filter = props.match.params.filter || 'North Springs';

  return (<MartaDashContainer filter={filter}/>)
}

export default MartaApp;
