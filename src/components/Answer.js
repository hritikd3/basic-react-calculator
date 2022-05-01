import React, { Component } from "react";

class ResultComponent extends Component {
  render() {
    let { answer } = this.props;
    return (
      <div className="answer">
        <p>{answer}</p>
      </div>
    );
  }
}

export default ResultComponent;
