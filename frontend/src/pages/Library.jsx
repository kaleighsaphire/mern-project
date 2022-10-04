import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getBooks, reset} from '../features/books/bookSlice'
import BookForm from '../components/BookForm'
import BookEntry from '../components/BookEntry'
import Spinner from '../components/Spinner'
import Heading from '../components/Heading'

function Library({showAdd}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showBookForm, setShowBookForm] = useState(false)

    const {user} = useSelector((state) => state.auth)
    const {books, isLoading, isError, message} = useSelector((state) => state.books)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user){
      navigate('/login')
      return
    }

    dispatch(getBooks())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading){
    return <Spinner />
  }

  return (
    <>
      <div class="shelf-container">
        <div class="shelf bookL">
          <div class="shelf bookI">
            <h6>I</h6>
          </div>
          <div class="shelf bookB">
            <h6>B</h6>
          </div>
          <div class="shelf bookR">
            <h6>R</h6>
          </div>
          <div class="shelf bookA">
            <h6>A</h6>
          </div>
          <div class="shelf bookR2">
            <h6>R</h6>
          </div>
          <div class="shelf bookY">
            <h6>Y</h6>
          </div>
          <h6>L</h6>
        </div>
    </div>
    <Heading
        onAdd={() => setShowBookForm(!showBookForm)}
        showAdd={showBookForm}
      />
    {showBookForm && <BookForm onAdd={BookForm} />}
    <section className="book-content">
      {books.length > 0 ? (
        <div className="books">
          {books.filter((book) => book.own === true).map((book) => (
            <BookEntry key={book._id} book={book} />
          )).reverse()}
        </div>
      ) : (
      <h3>Nothing in Library</h3>
      )}
    </section>
    </>
  )
}

export default Library
