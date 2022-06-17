import React from 'react'
import SpinnerGIF from '../assets/spinnerGIF.jpg'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center w-full'>
    <div className="w-1/2 mt-20 dark:bg-slate-900">
        <img src={SpinnerGIF} alt="Loading..." className="text-center mx-auto" width="180" height="180" />
    </div>
    </div>
  )
}

export default Spinner