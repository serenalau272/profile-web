import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  TabBackground,
  TabContainer,
  TabEdge,
  TabEdgeBackground,
  TabLogo,
  TabTitle,
} from './tab'

const xIconStyle = {
  marginTop: '0.2vw',
  width: '0.8vw',
  height: '0.8vw',
  alignSelf: 'center',
  marginLeft: 'auto',
  marginRight: '0.7vw',
  color: '#212121',
  cursor: 'pointer',
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
        </TabBackground>
        {props.isSpotlight && <TabEdge />}
      </TabContainer>
    </>
  )
}

export default Tab
