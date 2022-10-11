import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
// import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    // Destructure form data
    const {name, email, password, password2} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError){
            toast.error(message)
        }
        if (isSuccess || user){
            navigate('/dashboard')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2){
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name, 
                email, 
                password,
            }

            dispatch(register(userData))
        }
    }
    
    if (isLoading){
        return <Spinner />
    }

  return (
        <>
            <section className="heading">
                <h1>
                 Register
                </h1>
                <p>Create an account</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group form-section">
                        <label htmlFor="name" className="login">User Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value={name} 
                            placeholder="Enter your user name..." 
                            onChange={onChange} 
                        />
                    </div>
                    <div className="form-group form-section">
                    <label htmlFor="email" className="login">Email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            value={email} 
                            placeholder="Enter your email..." 
                            onChange={onChange} 
                        />
                    </div>
                    <div className="form-group form-section">
                    <label htmlFor="password" className="login">Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            name="password" 
                            value={password} 
                            placeholder="Choose a password..." 
                            onChange={onChange} 
                        />
                    </div>
                    <div className="form-group form-section">
                    <label htmlFor="password2" className="login">Confirm Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password2" 
                            name="password2" 
                            value={password2} 
                            placeholder="Confirm your password..." 
                            onChange={onChange} 
                            />
                    </div>
                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="btn btn-block">Submit
                        </button>
                    </div>
                </form>
                <span className="login">Already have an account? <Link to="/login" className="link">Login here.</Link></span>
            </section>
        </>
    )
}

export default Register