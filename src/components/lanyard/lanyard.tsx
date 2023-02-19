import classNames from 'classnames'
import React from 'react'
import './lanyard.scss'

interface LanyardProps {
  company: string
  location: string
  date: string
  role: string
  bandColor: string
  badgeColor: string
  isShorter: boolean
}

export const Lanyard = (props: LanyardProps) => {
  return (
    <div
      className={classNames(
        'lanyard-container',
        props.isShorter ? 'shorter' : '',
      )}
    >
      <div
        className="lanyard-band"
        style={{ backgroundColor: props.bandColor }}
      />
      <div className="lanyard-ring" />
      <div className="lanyard-clip" />
      <div
        className="lanyard-badge"
        style={{ backgroundColor: props.badgeColor }}
      >
        <div className="company">{props.company}</div>
        <div className="location">{props.location}</div>
        <div className="role">{props.role}</div>
        <div className="footer">{props.date}</div>
      </div>
    </div>
  )
}
