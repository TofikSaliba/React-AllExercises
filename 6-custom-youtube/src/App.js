import React from "react";
import SearchBar from "./Components/SearchBar";
import youtube from "../src/apis/youtube";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";
import "./Components/style.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, view: "ui column" };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: null,
      view: "ui column",
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video, view: "ui row" });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className={this.state.view}>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
