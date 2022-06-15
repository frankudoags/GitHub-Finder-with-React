import {useContext} from 'react';
import GithubContext from '../../context/GithubContext';
import Spinner from '../layout/Spinner';
import RepoItem from './RepoItem';


const RepoList = () => {
    const {repos, loading} = useContext(GithubContext);
    if(loading) {
        return <Spinner />
    }
  else return (
    <div className="grid place-items-center">
        <h1 className="text-3xl text-indigo-700 font-bold dark:text-slate-200 text-center my-8">
        Repositories
        </h1>
    <div className="grid place-items-center grid-cols-1 gap-4 max-w-5xl">
        {repos.map(repo => (
            <RepoItem key={repo.id} repo={repo} />
        ))}
    </div>
    </div>
    );
}

export default RepoList