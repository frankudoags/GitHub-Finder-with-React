import Proptypes from 'prop-types'
import {Link} from 'react-router-dom'
const UserItem = ({user}) => {
  return (   
    <div className="card shadow-sm hover:shadow-lg transition-all duration-300 translate-y-7 compact side bg-slate-100 dark:bg-slate-800 rounded-md">
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={user.avatar_url} alt="Profile" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title text-base text-slate-900 dark:text-slate-300 ">{user.login}</h2>
                <Link className="text-indigo-700 text-opacity-70 dark:text-indigo-500" to={`/user/${user.login}`}>
                    View Profile 
                </Link>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes = {
    user: Proptypes.object.isRequired
}


export default UserItem