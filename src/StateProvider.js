import React,{ useContext, useReducer, createContext } from 'react';

// Prepare the data layer
export const stateContext = createContext();

// Wrap your app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(stateContext);

