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
    let {books, isLoading, isError, message} = useSelector((state) => state.books)

    const sortOptions = ["Sort by", "Author", "Title", "Genre"]
    const [selected, setSelected] = useState(sortOptions[0])

    if (selected === 'Author'){
      books = books.filter((book) => !book.own).sort((a, b) => a.lastName.localeCompare(b.lastName))
    } else if (selected === 'Title'){
      books = books.filter((book) => !book.own).sort((a, b) => a.title.localeCompare(b.title))
    } else if (selected === 'Genre'){
      books = books.filter((book) => !book.own).sort((a, b) => a.genre.localeCompare(b.genre))
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

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading){
    return <Spinner />
  }

  return (
    <>
    <div className="tote-container">
      <div className="tote-handle1">
        <div className="tote-handle2"></div>
        <div className="tote">
          <h6 className="tote-text">WISH LIST</h6>
          <div className="heart"></div>
          <div className="heart2"></div>
        </div> 
      </div>
    </div>
    <Heading
        onAdd={() => setShowBookForm(!showBookForm)}
        showAdd={showBookForm}
      />
       <form className="sort-form">
          <select className="sort-form"
            value={selected} 
            onChange={e => setSelected(e.target.value)}>
            {sortOptions.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </form>
    {showBookForm && <BookForm onAdd={BookForm} />}
    <section className="book-content">
      {books.length > 0 ? (
        <div className="books">
          {books.filter((book) => !book.own).map((book) => (
            <BookEntry key={book._id} book={book} />
          ))}
        </div>
      ) : (
      <h3 className="empty">Nothing in Wish List</h3>
      )}
    </section>
    </>
  )
}

export default Library