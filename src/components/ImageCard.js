import React from "react";

class ImageCard extends React.Component {
  //The way to create a reference of the DOM element (React Refs)
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();

    this.state = {
      spans: 0
    }
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      //passed down the ref to the element to be access later on
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard