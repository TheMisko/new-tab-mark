import React from 'react';
import Search from '../../../components/Search/Search'
import Tab from '../../../components/Tab/Tab'
const arr = [1,2,3,4]

const FavoutireTabs = () => (
  <div className={'favourite-tabs-container'}>
    <Search/>
    <div className={'tabs-container'}>
      {arr.map((tab, index) => (
        <div className={'tab'}>
          <Tab/> {index}
        </div>
      ))}
    </div>
  </div>
);

export default FavoutireTabs;
