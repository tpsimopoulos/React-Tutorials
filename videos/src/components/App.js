import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  async getVideos(term) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: "snippet",
        maxResults: 4,
        q: term,
        type: "video",
        videoEmbeddable: true,
        key: "AIzaSyArgMy_y7fIcVI7f7m7yddXcH-NCLrYlhM"
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  componentDidMount() {
    this.getVideos('dogs')
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.getVideos.bind(this)} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={(video) => this.setState({ selectedVideo: video })} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default App;
