import React from 'react';
import { generate } from 'shortid';
import StyledTabBar from '../styles/TabBar';
import Tab from '../containers/Tab';
import TabNew from '../containers/TabNew';

export default ({rooms}) => {

  const roomTabs = rooms.map((room, index) => <Tab key={generate()} room={room} index={index} />)

  return(
    <StyledTabBar>
      {roomTabs}
      <TabNew />
    </StyledTabBar>
  )
}
