import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ListPosts } from './ListPosts.js';

const fetchJsonp = require('fetch-jsonp');

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchIdioContent = this.fetchIdioContent.bind(this);
    this.state = {
      apiKey: "URN4QXKCG3QD3Y5MS51A"
    };
  }

  componentDidMount() {
    this.fetchIdioContent();
  }

  async fetchIdioContent() {
    let url = `https://api.idio.co/1.0/content?key=${this.state.apiKey}`;

    try {
    const response = await fetchJsonp(url);

    if (response.ok) {
      const responseJson = await response.json();
      this.setState({
        idio: responseJson
      });
    }

  } catch (e) {
    console.log(e);
  }
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 id="index-title">Articles</h2>
          <ListPosts idioContent={this.state.idio} apiKey={this.state.apiKey} />
        </header>
      </div>
    );
  }
}

export default App;
