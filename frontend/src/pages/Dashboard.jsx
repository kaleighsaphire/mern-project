import {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {isError, message} = useSelector((state) => state.logs)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user){
      navigate('/login')
      return
    }

  }, [user, navigate, isError, message, dispatch])

  return (
    <>
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>What are you reading today?</p>
    </section>
    <section className="page-links">
      <section className="link-container">
        <Link to='/blog'>
          <div className="journal-link">
            <div class="open-book">
              <div className="back"></div>
              <div className="page6">
              <p className="book-text special">
                Keep a record of all your favourite novels and stories.
                </p>
              </div>
              <div className="page5"></div>
              <div className="page4">
              <p className="book-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="page3"></div>
              <div className="page2">
                <p className="book-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="page1"></div>
              <div className="front"> 
                <h2 className="journal">{user && user.name}'s Reading Journal</h2>
              </div>
            </div>
            <div className="blog-dashboard"><h2>Journal</h2></div>
          </div>
        </Link>
      </section>
    </section>
      <section className="link-container">
        <Link to='/library'>
          <div className="bg">
          <div className="library-dashboard"><h2>Library</h2></div>
            <div className="book1">
              <div className="ribbon1"></div>
              <div className="bookCut"></div>
            </div>
             <div className="book2">
               <div className="ribbonCut1"></div>
               <div className="ribbonCut2"></div>
               <div className="ribbonCut3"></div>
             </div>
             <div className="book3">
               <div className="ribbon3"></div>
               <div className="bookCut3"></div>
            </div>
            <div className="book4">
               <div className="ribbonCut4"></div>
               <div className="ribbonCut5"></div>
               <div className="ribbonCut6"></div>
            </div>
            <div className="book5"></div>
            <div className="book6">
              <div className="ribbon6"></div>
              <div className="bookCut6"></div>
            </div>
            <div className="book7">
               <div className="ribbonCut7"></div>
               <div className="ribbonCut8"></div>
               <div className="ribbonCut9"></div>
            </div>
          </div>
        </Link>
    </section>
    </>
  )
}

export default Dashboard