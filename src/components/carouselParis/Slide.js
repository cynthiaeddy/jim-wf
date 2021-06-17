import React from 'react'
import imageData from '../carouselMexico/Images'
import '../../stylesheets/AboutParis.css'

class Slide extends React.Component {
  constructor(props) {
    super(props)
    this.state = { landing: imageData }
  }
  render() {
    console.log('in slide', this.props)
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
