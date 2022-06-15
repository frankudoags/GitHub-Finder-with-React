import {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom'
import GithubContext from '../context/GithubContext';
import Spinner from '../components/layout/Spinner'
import {FaCodepen, FaStore} from 'react-icons/fa'
import {BiArrowBack} from 'react-icons/bi'
import {BsArrowUpRight, BsTwitter} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import { Link } from 'react-router-dom';
import RepoList from '../components/repo/RepoList';
import {getUser, getUserRepo} from "../context/GithubActions"


const User = () => {

    const {user, loading, dispatch} = useContext(GithubContext);

    const params = useParams();

    useEffect(() => {
        //Helper Function to Set Loading to True with the dispatch method from useReducer;
        const setLoadingTrue = () => dispatch({type: 'LOAD_TRUE'})
        setLoadingTrue();
          //function to get the user data from the github context and set the needed state value
        //in the reducer
        const getUserData =async() => {
            const userData = await getUser(params.login);
            dispatch({type: 'GET_USER', payload: userData});
        } //end of getUserData
        getUserData();
         //function to get a user's repos from the github context and set the needed state value
        //in the reducer
        const getSingleUserRepo = async() => {
        const userRepo = await getUserRepo(params.login);
         dispatch({type: 'GET_REPOS', payload: userRepo});
     } //end of getSingleUserRepo
        getSingleUserRepo();
    }, [params, dispatch])



    const {name, type, avatar_url, location,
            bio, blog, twitter_username,
            hireable, company, html_url, login} = user;

    if(loading) {
        return <Spinner />
    }
    //display user profile and repos
    else return (
        <>
        <Link to='/started' className='flex gap-2 items-center mb-8 ml-8 text-indigo-700 font-semibold dark:text-slate-200'>
            <BiArrowBack className="font-semibold"/> Back
        </Link>
        <div className="flex items center justify-center dark:bg-slate-900">
            <figure className="md:flex md:gap-8 md:justify-between w-fit max-w-5xl bg-slate-100 rounded-xl p-8  dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 mx-auto md:mx-0 md:h-48 rounded-full" src={avatar_url} alt="" width="384" height="512"></img>
            <div className="pt-6 text-center  space-y-4">
                <h1 className="text-2xl font-bold text-indigo-700 dark:text-slate-200">{name}</h1>
                <blockquote>
                <figcaption className="font-medium">
                <div className="text-sm text-slate-700 dark:text-slate-200">
                    {login}
                </div>
                <div className="ml-2 mr-1 badge badge-success">
                    {type}
                </div>
                {hireable && (
                    <div className="ml-2 mr-1 badge badge-success">
                        Hireable
                    </div>
                )}
                </figcaption>
                <p className="text-sm text-slate-700 dark:text-slate-200 mt-4 text-left sm:text-base font-medium">
                    {bio}
                </p>
                </blockquote>
                <div className="flex flex-row gap-2 flex-wrap font-semibold items-center justify-center space-x-4">
                    {location && (
                        <div className="flex items-center mt-2">
                            <ImLocation className="text-indigo-700  dark:text-slate-200 mr-2" />
                            <span className="text-sm text-slate-700 dark:text-slate-200">{location}</span>
                        </div>
                    )}
                    {company && ( 
                        <div className="flex items-center mt-2">
                            <FaStore className="text-indigo-700 dark:text-slate-200 mr-2" />
                            <span className="text-sm text-slate-700 dark:text-slate-200">{company}</span>
                        </div>
                    )}
                    {blog && (
                        <div className="flex items-center mt-2">
                            <FaCodepen className="text-indigo-700 dark:text-slate-200 mr-2" />
                            <a href={blog} target="_blank" rel='noreferrer' className="text-sm transition-all duration-300 text-slate-700 dark:text-slate-200 hover:text-indigo-500">Blog</a>
                        </div>
                    )}
                    {twitter_username && (
                        <div className="flex items-center mt-2">
                            <BsTwitter className="text-indigo-700 dark:text-slate-200 mr-2" />
                            <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel='noreferrer' className="text-sm transition-all duration-300 text-slate-700 dark:text-slate-200 hover:text-indigo-500">Twitter</a>
                        </div>
                    )}
                    <div>
                    <a href={html_url} target="_blank" rel='noreferrer' className="text-sm flex gap-2 items-center text-indigo-600 mt-2">View on Github<BsArrowUpRight className="font-semibold text-indigo-600"/></a>
                    </div>
            </div>
            </div>
            </figure>
        </div>
        <RepoList />
        </>
    )
}


export default User