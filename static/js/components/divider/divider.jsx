import React from 'react'

class Divider extends React.Component {



  render () {
    const height= 150;
    const width= 50;

    return (
      <div className="dividerContainer">
        <svg>
          <line
            x1={width/2}
            y1={0}
            x2={width/2}
            y2={height}
            className="dividingLine"
          />
        </svg>
      </div>
    )
  }
}

export default Divider;
