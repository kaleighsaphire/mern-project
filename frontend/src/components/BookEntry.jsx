import {useDispatch} from 'react-redux'
import {FaRegTrashAlt, FaMedal} from 'react-icons/fa'
import {deleteBook} from '../features/books/bookSlice'

const BookEntry = ({book}) => {
    const dispatch = useDispatch()
   
  return (
    <>
      <div className="book-container">
        <div className="book">
          <div className={book.genre}>
            <h3 className="book-title">{book.title}</h3>
            <span className="book-author firstName">{book.firstName}</span>
            <span className="book-author lastName">{book.lastName}</span>
          </div>
          {book.read ? <span className="read"><FaMedal /></span> : ""}
          <button onClick={()=> dispatch(deleteBook(book._id))}className="delete"><FaRegTrashAlt /></button>
        </div>
      </div>
    </>
  )
}

export default BookEntry
