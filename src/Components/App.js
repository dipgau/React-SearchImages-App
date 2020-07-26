import React from "react";
import unsplash from "../api/unsplash";
import SeacrhBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    value: " ",
    images: [],
  };

  onInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onFormSubmit = async (e) => {
    e.preventDefault();

    // importing unsplash.js and using it with get method to make API request
    const response = await unsplash.get("/search/photos", {
      params: { query: this.state.value },
    });
    /*.then((response) => {
        //chaining on .then to get the list of images or use async method

        this.setState({
          images: response.data.results,
        });
      }); */

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SeacrhBar
          value={this.state.value}
          inputVal={this.onInputChange}
          onFormSubmit={this.onFormSubmit}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
