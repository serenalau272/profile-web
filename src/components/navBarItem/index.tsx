import React from "react";
import {
  NavBarItemContainer,
  SectionIndicator,
  SectionTitle,
} from "./navBarItem";

interface INavBarItemProps {
  sectionTitle: string;
  width: string;
  isSelected: boolean;
  handleOnClick: () => void;
}

const NavBarItem: React.FC<INavBarItemProps> = (props: INavBarItemProps) => {
  return (
    <NavBarItemContainer onClick={props.handleOnClick} width={props.width}>
      <SectionTitle>{props.sectionTitle}</SectionTitle>
      <SectionIndicator isSelected={props.isSelected} width={props.width} />
    </NavBarItemContainer>
  );
};

export default NavBarItem;
