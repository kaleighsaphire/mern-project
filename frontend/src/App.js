import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog'
import Library from './pages/Library'
import WishList from './pages/WishList'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import About from './pages/About'
import {useSelector} from 'react-redux'

function App() {
  const {user} = useSelector((state) => state.auth)
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={user ? <Dashboard /> : <About />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/library' element={<Library />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
