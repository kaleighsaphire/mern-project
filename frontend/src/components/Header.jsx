import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
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
        <Link to='/'>
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
        <ul>
            {user ? (
                <>
                    <li>
                        <Link to='/blog'>Journal</Link>
                    </li>
                    <li>
                        <Link to='/library'>Library</Link>
                    </li>
                    <li>
                        <Link to='/wishlist'>Wish List</Link>
                    </li>
                    <li>
                        <button className='btn' onClick={onLogout}>Logout</button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                </>
            )}           
        </ul>
    </header>
  )
}

export default Header