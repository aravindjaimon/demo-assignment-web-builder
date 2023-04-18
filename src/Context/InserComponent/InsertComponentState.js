/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import geditorConfig from '../../api_utils/geditor_config';
import InsertComponentContext from './InsertComponentContext';

const InsertComponentState = ({ children }) => {
  const [Selectedid, setSelectedid] = useState('section')
	const [SelectedTab, setSelectedTab] = useState('layout')
  const [selectedOption, setSelectedOption] = useState(null)
  const [editor, setEditor] = useState()

  useEffect(() => {
    const editor = geditorConfig()
    setEditor(editor)
}, [])
  
  return <InsertComponentContext.Provider value={{
    setSelectedid , Selectedid,setSelectedTab,SelectedTab,
    selectedOption,setSelectedOption,
    editor,setEditor
  }}>{children}</InsertComponentContext.Provider>;
};
export default InsertComponentState;
