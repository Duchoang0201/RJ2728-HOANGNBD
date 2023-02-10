import React from 'react';
import Styles from './components/common/Header.module.css'
import './App.css';
import Header from './components/common/Header';


function App() {
  
  return (
    <React.Fragment>
    <Header title = "ROCK1" />
    <div className="row w-100">
        <div className="col-12 col-md-3 mb-3">
          <div className={`${Styles.item} p-4`}>The Drive</div>
          <div className={`${Styles.item} p-4`}>The Walk</div>
          <div className={`${Styles.item} p-4`}>The Return</div>
          <div className={`${Styles.item} p-4`}>The End</div>
        </div>
        <div className="col col-md m-3">
          <h1>The Walk</h1>
          <p>
            The walk to the Pulpit Rock will take you approximately two hours,
            give or take an hour depending on the weather conditions and your
            physical shape.
          </p>
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Pulpit rock"
            className="w-100 h-75"
          />
        </div>
        <div id="div__right" className="col-11 col-md-3 bg-info h-75">
          <div>
            <h1>What?</h1>
            <p>
              The Pulpit Rock is a part of a mountain that looks like a pulpit.
            </p>
          </div>
          <div>
            <h1>Where?</h1>
            <p>The Pulpit Rock is in Norway.</p>
          </div>
          <div>
            <h1>Price?</h1>
            <p>The walk is free!</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
