import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';
import Footer from './Footer.js';
import './Footer.css';
import logo from './images/react.svg';
import news from './images/news.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img className="appLogo" src={logo} alt="React Logo" />

          <div className="title">
            <h1>&lt;Teacher Hub News&gt;</h1>
           
          </div>

          <img className="scriptLogo" src={news} alt="Javascript Logo" />
        </div>
        <Search default="google-news" />
        <Footer />
      </div>
    );
  }
}

export default App;
