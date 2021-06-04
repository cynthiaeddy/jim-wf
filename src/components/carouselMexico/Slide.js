import React from 'react'
import imageData from '../carouselMexico/Images'
import '../../stylesheets/AboutMexico.css'

class Slide extends React.Component {
  constructor(props) {
    super(props)
    this.state = { landing: imageData }
  }
  render() {
    return (
      <section>
        {this.state.landing.map((s, index) => (
          <div
            className={
              index === this.props.activeIndex
                ? 'Slide-active'
                : 'Slide-sliding'
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