import React from 'react';
import { generate } from 'shortid';
import styled from 'styled-components';
import Tab from '../containers/Tab';
import TabNew from '../containers/TabNew';

const StyledTabBar = styled.div`
  display: flex;
  height: 60px;
`

const TabBar = ({rooms}) => {

  const roomTabs = rooms.map((room, index) => <Tab key={generate()}  room={room} index={index} />)

  return(
    <StyledTabBar>
      {roomTabs}
      <TabNew />
    </StyledTabBar>
  )
}

export default TabBar;
