/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import InsertComponentContext from './InsertComponentContext';

const InsertComponentState = ({ children }) => {
  const [Selectedid, setSelectedid] = useState('section')
	const [SelectedTab, setSelectedTab] = useState('layout')
  
  // useEffect(() => {
  //   setRoute(prev => ({ to: location.pathname + location.search, from: prev.to }));
  // }, [location]);
  return <InsertComponentContext.Provider value={{
    setSelectedid , Selectedid,setSelectedTab,SelectedTab
  }}>{children}</InsertComponentContext.Provider>;
};
export default InsertComponentState;
