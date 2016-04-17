import React from 'react';
import {render} from 'react-dom';
import LikableComponent from './experimental/likableComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <LikableComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
