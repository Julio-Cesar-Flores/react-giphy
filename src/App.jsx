import React from "react";
import axios from "axios";
import SearchBar from "./componentes/SearchBar";
import "./App.css";
import Imagen from "./componentes/Imagen";

class App extends React.Component {
  state = {
    results: [],
  };

  sendSearch = (search) => {
    //const apiKey = "7YZnB1qGeFMQ0ziBL9xVRokPCQQmIKZZ";
    const apiKey = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10&offset=0&rating=g&lang=es`
      )
      .then((response) => {
        this.setState({ results: response.data.data });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <SearchBar sendSearch={this.sendSearch} />
        <div className="grid-cards">
          {this.state.results.map((gif) => {
            console.log(gif);
            return (
              <Imagen key={gif.id} url={gif.images.fixed_height_small.url} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
