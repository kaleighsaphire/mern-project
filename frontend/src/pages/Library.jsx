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

    const sortOptions = ["author", "title", "genre"]
    const [selected, setSelected] = useState(sortOptions[0])
    const submit = () => {
        console.log(selected)
      }
      
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user){
      navigate('/login')
      return
    }

    dispatch(getBooks())
    // console.log(books)

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading){
    return <Spinner />
  }

  return (
    <>
      <div className="shelf-container">
        <div className="shelf bookL">
          <div className="shelf bookI">
            <h6>I</h6>
          </div>
          <div className="shelf bookB">
            <h6>B</h6>
          </div>
          <div className="shelf bookR">
            <h6>R</h6>
          </div>
          <div className="shelf bookA">
            <h6>A</h6>
          </div>
          <div className="shelf bookR2">
            <h6>R</h6>
          </div>
          <div className="shelf bookY">
            <h6>Y</h6>
          </div>
          <h6>L</h6>
        </div>
    </div>
    <Heading
        onAdd={() => setShowBookForm(!showBookForm)}
        showAdd={showBookForm}
      />
      <form>
          <select
            value={selected} 
            onChange={e => setSelected(e.target.value)}>
            {sortOptions.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <button type="button" onClick={submit}>
            Submit
            </button>
        </form>
    {showBookForm && <BookForm onAdd={BookForm} />}
    <section className="book-content">
      {books.length > 0 ? (
        <div className="books">
          {books.filter((book) => book.own === true).sort((a, b) => a.title.localeCompare(b.title)).map((book) => (
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
