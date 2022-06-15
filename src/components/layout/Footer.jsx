import {FaGithub} from 'react-icons/fa'
const Footer = () => {
    const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10  text-primary-content footer-center dark:bg-slate-900">
        <div>
                <FaGithub className="text-3xl"/>
               <p className='text-slate-700 font-bold dark:text-gray-200'>Built by:  <span className='text-indigo-600'>frankudoags.eth </span> &copy; {footerYear}</p> 
        </div> 
     </footer>
  )
}

export default Footer