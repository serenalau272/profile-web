import styled from 'styled-components'

interface SectionIndicatorProps {
  isSelected?: boolean
  width: string
}

export const NavBarItemContainer = styled.div<SectionIndicatorProps>`
  width: calc(${(props) => props.width} + 1vw);
  height: 4.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.4vw;
  cursor: pointer;
`

export const SectionTitle = styled.text`
  font-family: 'KumbhSans-Medium';
  color: #5c5c5c;
  font-size: 1.7vw;
  z-index: 1;
`

export const SectionIndicator = styled.div<SectionIndicatorProps>`
  background-color: #eca96d;
  width: ${(props) => props.width};
  height: 0.8vw;
  margin-top: -0.7vw;
  margin-left: 0.8vw;
  display: ${(props) => (props.isSelected ? '' : 'none')};
`
