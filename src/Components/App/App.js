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
    this.state = {
      searchResults: [{
        id: '1234',
        name: 'Best song ever',
        artist: 'Prince',
        album: 'Purple Rain'
      }],

      playlistName: 'New Playlist',

      playlistTracks: [{
        id: '1234',
        name: 'PL Best song ever',
        artist: 'PL Prince',
        album: 'PL Purple Rain'
      }]
      };
    }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }

};

export default App;
