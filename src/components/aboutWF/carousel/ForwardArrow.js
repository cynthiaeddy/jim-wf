import React, { Component } from 'react'

class ForwardArrow extends Component {
  render() {
    return (
      <div className="arrow" onClick={this.props.goToNextSlide}>
        <div className="arrowSpace">
          <h2>
            forward <span>&gt;&gt;</span>
          </h2>
        </div>
      </div>
    )
  }
}

export default ForwardArrow
