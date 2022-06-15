import PropTypes from  'prop-types'
import {FaEye, FaInfo, FaLink, FaStar} from 'react-icons/fa'
import {CgGitFork} from 'react-icons/cg'


const RepoItem = ({repo}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto p-8 shadow-sm hover:shadow-xl transition-all duration-300 translate-y-7 compact side bg-slate-100 dark:bg-slate-800 rounded-md">
      <h1 className="mb-4 font-semibold text-xl text-slate-700 dark:text-slate-200">{repo.name}</h1>
      <p className="text-slate-700 dark:text-slate-200 mb-2">{repo.description}</p>
        <div className="flex">
          <div className="mr-2 badge badge-info">
            <FaEye className="mr-2" />{repo.watchers_count}
          </div>
          <div className="mr-2 badge badge-success ">
            <FaStar className="mr-2" />{repo.stargazers_count}
          </div>
          <div className="mr-2 badge badge-error">
            <FaInfo className="mr-2" />{repo.open_issues}
          </div>
          <div className="mr-2 badge badge-warining">
            <CgGitFork className="mr-2" />{repo.forks}
          </div>
        </div>
        <div>
          <a href={repo.html_url} target="_blank" rel='noreferrer' className="text-sm flex gap-2 mt-8 items-center font-semibold text-indigo-600">View on Github<FaLink className="font-semibold text-indigo-600"/></a>
        </div>
      </div>
  )
}
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}
export default RepoItem