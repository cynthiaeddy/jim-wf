import React from 'react'
import '../../../stylesheets/AboutWF.css'

class Slide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      landing: this.props.imageData,
    }
  }
  render() {
    return (
      <section>
        {this.state.landing.map((s, index) => (
          <div
            className={
              index === this.props.activeIndex
                ? 'slide-active'
                : 'slide-sliding'
            }
            key={index}>
            {s.img}
          </div>
        ))}
      </section>
    )
  }
}
export default Slide
