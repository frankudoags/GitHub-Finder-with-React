import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-10">
      <h1 className="hidden text-5xl sm:flex text-indigo-600">Oops:</h1>
      <p className="text-2xl dark:text-slate-200"><span className="sm:hidden text-indigo-600">Oops:</span> Page not found.</p>
      <div className="mt-6 sm:mt-10">
      <Link className="bttn bttn-secondary" to="/">
      <FaHome className="mr-4"/>
        Back Home
      </Link>
      </div>
    </div>
  )
}

export default NotFound