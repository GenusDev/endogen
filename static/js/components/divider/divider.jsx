import React from 'react'

class Divider extends React.Component {



  render () {
    const height= 500;
    const width= 100;

    return (
      <svg id="dividerContainer" >
        <line
          x1={width/2}
          y1={0}
          x2={width/2}
          y2={height}
          className="dividingLine"
        />
      </svg>
    )
  }
}

export default Divider;
