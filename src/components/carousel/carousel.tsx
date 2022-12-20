import React, { Children, useState } from 'react'
import classNames from 'classnames'
import './carousel.scss'
import { Dots } from './dots'

interface CarouselProps {
  position?: {
    margin?: string
    marginTop?: string
    marginBottom?: string
    marginLeft?: string
    marginRight?: string
  }
  config?: {
    dots?: boolean
    dotsStyle?: {
      width?: string
      height?: string
      borderRadius?: string
      border?: string
    }
    singleItem?: boolean
    spotlight?: boolean
    itemGap?: string
  }
  children?: React.ReactNode
}

export const Carousel = (props: CarouselProps) => {
  const [spotlight, setSpotlight] = useState<number>(1)
  console.log('spotlight: ' + spotlight)

  const childrenArray = Children.toArray(props.children)
  const numChildren: number = childrenArray.length

  const newChildren: React.ReactNode[] = []

  for (let i = 1; i <= numChildren; i++) {
    newChildren.push(
      <div
        className={classNames(
          'cursor-pointer',
          spotlight === i ? 'spotlight-item' : '',
        )}
        onClick={() => setSpotlight(i)}
      >
        {childrenArray[i - 1]}
      </div>,
    )
  }

  return (
    <div style={props.position}>
      <div className="scroll-container" style={{ gap: props.config?.itemGap }}>
        {newChildren}
      </div>
      {props?.config?.dots && (
        <Dots
          quantity={numChildren}
          dotsStyle={props.config.dotsStyle ?? {}}
          spotlight={spotlight}
          setSpotlight={setSpotlight}
        />
      )}
    </div>
  )
}
