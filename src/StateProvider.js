import React, { createContext, useContext, useReducer } from 'react'; //related to react Context API

export const StateContext = createContext();

//creating a state provider layer and wrapping the entire data layer that's needed 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//inorder to consume the state provider, a hook

export const useStateValue = () => useContext(StateContext);

