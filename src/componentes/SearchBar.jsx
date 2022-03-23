import React from "react";
import './searchBar.css';

class SearchBar extends React.Component {
  state = {
    search: "",
  };

  render() {
    return (
      <div className="search-bar">
        <input
          className="search-input"
          placeholder="¿Qué deseas buscar?"
          name="search"
          onChange={(e) => {
            this.setState({ search: e.target.value });
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            this.props.sendSearch(this.state.search||"cats");
          }}
        >
          Buscar
        </button>
      </div>
    );
  }
}

export default SearchBar;
