import { useState, useContext } from "react"
import GithubContext from "../../context/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import {searchUser} from "../../context/GithubActions"

const UserSearch = () => {
  //component level state
    const [text, setText] = useState('');
    //Global state from Github Context
    const {users, dispatch} = useContext(GithubContext);

    //Global state from Alert Context
    const {setAlert} = useContext(AlertContext);

    //function that handles the textchange from the input tag
    const handleTextChange = (e)=> setText(e.target.value);

    //function to clear users array
    const clearUsers = () => dispatch({type: 'CLEAR'})

    //Helper Function to Set Loading to True with the dispatch method from useReducer;
    const setLoadingTrue = () => dispatch({type: 'LOAD_TRUE'})

    //function that handles the form submission
    const handleSubmit = async (e)=> {
        e.preventDefault();
        if(text === '') {
            setAlert('Please enter something', 'error')
        }
        else {
            //@todo - Search users by sending the text to the GitHub context to initiate the search
            setLoadingTrue();
           const users = await searchUser(text);
           dispatch({type: 'GET_USERS', payload: users});
            setText('');
        }
    }

    // function to clear the user state in github context when the button is clicked
    const clearUI = () => {
      clearUsers()
      setAlert('Cleared Successfully', 'success')
    };

     
  return (
    <div >
        <h2 className="text-slate-900 text-center text-4xl font-bold my-12 dark:text-slate-200">Enter a username <span className="text-indigo-700">to Search</span></h2>

        <form onSubmit={handleSubmit}>
            <div className="flex mb-12 gap-2 items-center justify-center">
            <div className="group relative w-5/6 sm:max-w-lg ">
                <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-indigo-400 pointer-events-none group-focus-within:text-indigo-700" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                <input className="focus:ring-2 focus:ring-indigo-700 focus:outline-none w-full appearance-none  text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 pr-4 ring-1 ring-slate-200 shadow-sm"
                 type="search"
                  aria-label="Search for Users"
                   placeholder="Search for Users..."
                   value={text}
                   onChange={handleTextChange}
                   ></input>
            </div>
                       <button
                          className="bttn-2 bttn-primary mr-4"
                          type="submit"
                        >
                          Go
                        </button>
            </div>

            <div className="mt-5 sm:mt-8 flex justify-center">
                        {users.length > 0 && (
                            <button className="bttn-2 bttn-secondary"
                            onClick={clearUI}
                            >
                           Clear All
                          </button>
                        )}
                </div>
            </form>
    </div>
  )
}

export default UserSearch