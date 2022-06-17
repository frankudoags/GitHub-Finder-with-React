import {createContext, useReducer}  from 'react';
import GithubReducer from './GithubReducer';

const GithubContext = createContext();


export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    //import and initialize reducer and reducer state
    //you receive the current state from the reducer
    //you also receive dispatch: An inbuilt function to access and send requests to the reducer
    const [state, dispatch] = useReducer(GithubReducer, initialState);
 
    return <GithubContext.Provider value={{
       ...state,
       dispatch
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;

