import React from 'react'
import imageData from './ImagesParis'
import '../../../stylesheets/AboutMexico.css'

class SlideParis extends React.Component {
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
export default SlideParis
