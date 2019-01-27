import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Page from './components/Page';
import EditArea from './components/EditArea';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Page>
          <EditArea />
        </Page>
        <Footer />
      </div>
    );
  }
}

export default App;
