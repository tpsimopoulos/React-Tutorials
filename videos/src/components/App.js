import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  async getVideos(term) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: "snippet",
        maxResults: 3,
        q: term,
        type: "video",
        videoEmbeddable: true,
        key: "AIzaSyArgMy_y7fIcVI7f7m7yddXcH-NCLrYlhM"
      }
    });
    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.getVideos.bind(this)} />
        <VideoList videos={this.state.videos} onVideoSelect={(video) => console.log('From the App!', video)} />
      </div>
    );
  }
}


export default App;
