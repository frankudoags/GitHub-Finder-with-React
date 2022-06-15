import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = ({title}) => {
  return (
   <nav className="navbar p-6">
    <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
            <FaGithub className="inline pr-2 text-3xl transition-colors ease-in delay-300 hover:text-indigo-700 dark:text-gray-300"/>
            <Link to="/" className="text-lg font-bold align-middle text-black">
                <span className="text-indigo-600">GitHub </span> 
                <span className="text-gray-800 dark:text-gray-200">
                    Tracker
                </span>
            </Link>
        </div>   
    </div>
   </nav>
  )
}
export default Navbar