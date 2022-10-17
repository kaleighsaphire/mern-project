import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {FaChevronDown} from 'react-icons/fa'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <header className='header'>
        <Link to={user ? '/dashboard' : '/'}>
            <div className="logo-container">
                <div className="cover"></div>
                <div className="cover-cutout">
                <div className="page-one"></div>
                <div className="page-two"></div>
                <div className="page-three"></div>
            </div>
            <div className="logo"><span>IBER</span></div>
            </div>
        </Link>
            {user ? (
                <>
                <div class="dropdown">
                        <button class="dropbtn">Visit  
                        <FaChevronDown className='down' />
                        </button>
                        <div class="dropdown-content">
                            <ul>
                                <li>
                                    <Link to='/blog'>Journal</Link>
                                </li>
                                <li>
                                    <Link to='/library'>Library</Link>
                                </li>
                                <li>
                                    <Link to='/wishlist'>Wish List</Link>
                                </li>
                            </ul>
                        </div>
                </div>
                <button className='btn' onClick={onLogout}>Logout</button>
                </>
            ) : (
                <>
                <ul className="logout-links">
                    <li>
                        <Link to='/login' className='logout-links'>Login</Link>
                    </li>
                    <li>
                        <Link to='/register' className='logout-links'>Register</Link>
                    </li>
                    </ul>
                </>
            )}           
   
    </header>
  )
}

export default Header