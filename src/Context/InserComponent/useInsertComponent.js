/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import InsertComponentContext from './InsertComponentContext';

function useInsertComponent() {
  return useContext(InsertComponentContext);
}

export default useInsertComponent;
