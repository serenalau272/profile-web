import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  TabBackground,
  TabContainer,
  TabEdge,
  TabEdgeBackground,
  TabLine,
  TabLogo,
  TabTitle,
} from './tab'

const xIconStyle = {
  marginTop: '0.2vw',
  width: '0.8vw',
  height: '0.8vw',
  alignSelf: 'center',
  marginLeft: 'auto',
  marginRight: '1.5vw',
  color: '#212121',
  cursor: 'pointer',
}

const plusIconStyle = {
  marginTop: '0.1vw',
  width: '1vw',
  height: '1vw',
  alignSelf: 'center',
  marginRight: '-1.8vw',
  color: '#212121',
  cursor: 'pointer',
  zIndex: 10,
}

interface TabProps {
  tabTitle: string
  isSpotlight: boolean
}

const Tab = (props: TabProps) => {
  return (
    <>
      <TabContainer isSpotlight={props.isSpotlight}>
        <TabEdge />
        <TabEdgeBackground isSpotlight={props.isSpotlight} />
        <TabBackground isSpotlight={props.isSpotlight}>
          <TabLogo>sl</TabLogo>
          <TabTitle>{props.tabTitle}</TabTitle>
          {props.isSpotlight && (
            <FontAwesomeIcon icon="xmark" style={xIconStyle} />
          )}
          {props.isSpotlight && (
            <FontAwesomeIcon icon="plus" style={plusIconStyle} />
          )}
          {!props.isSpotlight && <TabLine />}
        </TabBackground>
        {props.isSpotlight && <TabEdge />}
      </TabContainer>
    </>
  )
}

export default Tab
