import React from 'react'
import {Link} from 'react-router-dom'
import GIT from '../components/assets/gitWorld.png'
function About() {
  return (
    <main className="mt-6 text-center flex flex-col-reverse lg:flex-row gap-4 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left -mt-16 lg:mt-0">
              <h1 className="text-2xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-indigo-600 xl:inline">How It Works</span>
              </h1>
              <p className="mt-3 mx-auto text-base text-gray-500 dark:text-gray-400 text-left sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                Using the Github API, we fetch users data and display on screen
              Just enter the username of the account and get the complete data of the account. Data also includes latest 20 public repositories of any GitHub Account.
              </p>
              <div className="mt-5 sm:mt-8 flex justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link className="bttn bttn-secondary" to="/">
                    Back Home
                  </Link>
                </div>
              </div>
            </div>
            <div className="img-holder object-cover rounded-full">
              <img src={GIT} alt="" className="-mt-8 lg:-mt-56"/>
            </div>
          </main>
  )
}

export default About