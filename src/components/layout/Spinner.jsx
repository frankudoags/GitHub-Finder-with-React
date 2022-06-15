import React from 'react'
import SpinnerGIF from '../assets/spinnerGIF.jpg'

const Spinner = () => {
  return (
    <div className="w-100 mt-20 dark:bg-slate-900">
        <img src={SpinnerGIF} alt="Loading..." className="text-center mx-auto" width="180" height="180" />
    </div>
  )
}

export default Spinner