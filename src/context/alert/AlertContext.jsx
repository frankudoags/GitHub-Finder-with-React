import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer"


const AlertContext = createContext()


export const AlertProvider = ({children}) => {
    //initial state of alert reducer 
        const initialState = null

        //destructure out state and dispatch from useReducer as drillable context to pass into components
        const [state, dispatch] = useReducer(AlertReducer,initialState);


        //Function to Set the alert state which takes in the message and type of alert
        //t also has a setTimeout to clear the alert after 3 secs
        const setAlert = (msg, type) => {
            dispatch({
                type: 'SET_ALERT',
                payload: {msg, type}
            })

            setTimeout(() => dispatch({type: 'CLEAR_ALERT'}), 3000)
        }

        return <AlertContext.Provider value={{
            alert: state,
            dispatch,
            setAlert 
            }}>
                    {children}
                </AlertContext.Provider>
}

export default AlertContext;
