import React from "react";

class Imagen extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img src={this.props.url} alt="" className="image-view" />
      </div>
    );
  }
}

export default Imagen;
