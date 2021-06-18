import React, { Component } from 'react'

class BackArrowParis extends Component {
  render() {
    return (
      <div className='arrow' onClick={this.props.goToPrevSlide}>
        <div className='arrowSpace backArrow'>
          <h2>
            <span>&lt;&lt; </span>back
          </h2>
        </div>
      </div>
    )
  }
}

export default BackArrowParis
