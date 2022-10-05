import {useDispatch} from 'react-redux'
import {FaRegTrashAlt} from 'react-icons/fa'
import {deleteBook} from '../features/books/bookSlice'

const BookEntry = ({book}) => {
    const dispatch = useDispatch()
   
  return (
    <>
      <div className="book-container">
        <div className="book">
          <div className={book.genre}>
            <h3 className="book-title">{book.title}</h3>
            <h5 className="book-author">{book.author}</h5>
          </div>
          <button onClick={()=> dispatch(deleteBook(book._id))}className="delete"><FaRegTrashAlt /></button>
        </div>
      </div>
    </>
  )
}

export default BookEntry
