import classNames from 'classnames'
import React from 'react'
import './carousel.scss'

interface DotProps {
  quantity: number
  dotsStyle: React.CSSProperties
  spotlight: number
  setSpotlight: (itemNum: number) => void
}

export const Dots = (props: DotProps) => {
  const renderDots = () => {
    let dotsList: JSX.Element[] = []
    for (let i = 1; i <= props.quantity; i++) {
      dotsList.push(
        <div
          className={classNames(
            'dot-body',
            props.spotlight === i ? 'filled' : '',
          )}
          style={props.dotsStyle}
          onClick={() => props.setSpotlight(i)}
        ></div>,
      )
    }
    return dotsList
  }
  return <div className="dots-container">{renderDots()}</div>
}
