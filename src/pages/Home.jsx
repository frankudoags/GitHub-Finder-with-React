import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
            <div className="sm:text-center lg:text-left">
                    <h1 className="text-3xl tracking-tight font-bold text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl">
                      <span className="inline">Fetch Data of any</span>{' '}
                      <span className=" text-indigo-600 inline">GitHub Account</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Just enter the username of the account and get the complete data of the account. Data also includes latest 20 public repositories of any GitHub Account.
                    </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <Link
                          to="/started"
                          className="bttn bttn-primary"
                        >
                          Get started
                        </Link>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link className="bttn bttn-secondary" to="/about">
                          Learn more
                        </Link>
                      </div>
                </div>
            </div>
          </main>
  )
}

export default Home