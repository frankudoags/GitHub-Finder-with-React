import {FaGithub, FaMoon} from 'react-icons/fa'
import {CgSun} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import useDarkModeToggler from '../../utils/DarkModeToggler'

const Navbar = ({title}) => {
    const [colorScheme, setTheme] = useDarkModeToggler();
  return (
   <nav className="navbar p-6">
    <div className="container mx-auto">
        <div className="flex flex-wrap w-full justify-between items-center">
            <div className="flex-none px-2 mx-2">
                <FaGithub className="inline pr-2 text-3xl transition-colors ease-in delay-300 hover:text-indigo-700 dark:text-gray-300"/>
                <Link to="/" className="text-lg font-bold align-middle text-black">
                    <span className="text-indigo-600">GitHub </span> 
                    <span className="text-gray-800 dark:text-gray-200">
                        Tracker
                    </span>
                </Link>
            </div> 

            <div>
                <span onClick={() => setTheme(colorScheme)} className='w-10 h-10 bg-indigo-600 rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center'>
                    {colorScheme === 'light' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#fff" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg> 
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                     
                </span>
            </div>
        </div>      
    </div>
   </nav>
  )
}
export default Navbar