import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    const target = event.target;
  }

  //onChange att is a callback function so the reference to the method needs to be without parentesis
  //otherwhise the method would be call every time the render method is called and not when the input its change
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search: </label>
            <input type='text' onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;