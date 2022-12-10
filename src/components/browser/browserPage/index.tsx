import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Tab from '../Tab'
import {
  BrowserContainer,
  CircleBtn,
  ControlsBar,
  Divider,
  SearchBar,
  TabBar,
  TabsContainer,
} from './browserPage'

import { ReactComponent as Star } from '../../../resources/icons/star-regular.svg'

const ArrowIconStyle = {
  color: '#A9A9A9',
  alignSelf: 'center',
  justifySelf: 'flex-start',
  marginLeft: '0.8vw',
  marginRight: '0.3vw',
  height: '1.3vw',
}

const RefreshIconStyle = {
  color: '#5F5F5F',
  alignSelf: 'center',
  justifySelf: 'flex-start',
  marginLeft: '0.6vw',
  height: '1.3vw',
}

const StarIconStyle = {
  alignSelf: 'center',
  marginLeft: '-1.8vw',
}

const EllipsisIconStyle = {
  color: '#5F5F5F',
  height: '1.3vw',
  alignSelf: 'center',
  marginLeft: '1vw',
}

interface BrowserPageProps {
  pageName: string
}

const BrowserPage = (props: BrowserPageProps) => {
  return (
    <>
      <BrowserContainer>
        <TabBar>
          <CircleBtn backgroundColor="#FF6D6D" borderColor="#F06C6C" />
          <CircleBtn backgroundColor="#FFD28E" borderColor="#F8C983" />
          <CircleBtn backgroundColor="#4EDE5C" borderColor="#45C752" />
          <TabsContainer>
            <Tab
              tabTitle={
                props.pageName === 'About' ? 'Serena Lau' : props.pageName
              }
            />
          </TabsContainer>
        </TabBar>
        <ControlsBar>
          <FontAwesomeIcon icon="arrow-left" style={ArrowIconStyle} />
          <FontAwesomeIcon icon="arrow-right" style={ArrowIconStyle} />
          <FontAwesomeIcon icon="rotate-right" style={RefreshIconStyle} />
          <SearchBar>{`serenalau.me/${props.pageName.toLowerCase()}`}</SearchBar>
          {/* <Star style={StarIconStyle} /> */}
          <FontAwesomeIcon icon="ellipsis-vertical" style={EllipsisIconStyle} />
        </ControlsBar>
        <Divider />
      </BrowserContainer>
    </>
  )
}

export default BrowserPage
