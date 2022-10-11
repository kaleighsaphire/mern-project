import {Link} from 'react-router-dom'

function About() {
    
  return (
    <>
        <div className="about_center">
            <div className="about_page">
                <section className="about-page">
                    <h1 className="about-heading">Welcome to Liber</h1>
                    <p className="about-description">
                    Liber is a personal library application for you to organize your books and journal your thoughts.
                    By organzing your library and reading wish list you will never accidently purchase the same book twice again!
                    You can also keep a personal history by reviewing and journaling everything you have read.
                    Start by creating an account.
                    </p>
                    <ul className="login-links">
                        <li>
                            <Link to='/login' className="link">Login</Link>
                        </li>
                        <li>
                            <Link to='/register' className="link">Register</Link>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </>
  )
}
export default About
