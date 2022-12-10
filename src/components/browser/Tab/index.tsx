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
}

const Tab = (props: TabProps) => {
  return (
    <>
      <TabContainer>
        <TabEdge />
        <TabEdgeBackground />
        <TabBackground>
          <TabLogo>sl</TabLogo>
          <TabTitle>{props.tabTitle}</TabTitle>
          <FontAwesomeIcon icon="xmark" style={xIconStyle} />
        </TabBackground>
        <TabEdge />
      </TabContainer>
    </>
  )
}

export default Tab
