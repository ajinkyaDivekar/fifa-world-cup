import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//nested Router
// import { Link, useRouteMatch} from "react-router-dom";

//basic Route - Browser
import Stuff from './stuff';

function App() {
  // let match = useRouteMatch();
  return (
    <div className="App">
      {/* Basic Router - Browser-router */}
      <Stuff />
    </div>
  );
}

export default App;
