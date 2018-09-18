import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {

  /* pass the state of a search results parameter through a series 
  of components to render an array of tracks. */

  constructor(props) {
    super(props);
    // Set this.state.searchResults to a dummy object
    this.state = { searchResults: {
        name: 'Track Name',
        artist: 'Some Person',
        album: 'Best Album Ever',
        id: '00123'
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            {//Pass this.state.searchRestulst to the SearchResults component}
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }

};

export default App;
