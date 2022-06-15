import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import User from './pages/User'
import Alert from './components/layout/Alert'
import UserResults from './components/users/UserResults'
import {GithubProvider} from './context/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
       <div className='flex flex-col justify-between h-screen overflow-y-scroll relative dark:bg-slate-900'>
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Alert />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/user/:login' element={<User />}></Route>
              <Route path='/notfound' element={<NotFound />}></Route>
              <Route path='/started' element={<UserResults />}></Route>
              <Route path='/*' element={<NotFound />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
   
  );
}

export default App;
