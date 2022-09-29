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
    <Heading
        onAdd={() => setShowBookForm(!showBookForm)}
        showAdd={showBookForm}
      />
    {showBookForm && <BookForm onAdd={BookForm} />}
    <section className="book-content">
      {books.length > 0 ? (
        <div className="books">
          {books.filter((book) => book.own === false).map((book) => (
            <BookEntry key={book._id} book={book} />
          ))}
        </div>
      ) : (
      <h3>Nothing in Library</h3>
      )}
    </section>
    </>
  )
}

export default Library