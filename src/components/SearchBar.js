import React from "react";

class SearchBar extends React.Component {
  state = {
    inputValue: ''
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  //onChange att is a callback function so the reference to the method needs to be without parentesis
  //otherwhise the method would be call every time the render method is called and not when the input its change
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search: </label>
            <input
              type='text'
              value={this.state.inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
