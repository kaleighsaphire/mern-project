import {useDispatch} from 'react-redux'
import {FaRegTrashAlt} from 'react-icons/fa'
import {deleteBook} from '../features/books/bookSlice'

const BookEntry = ({book}) => {
    const dispatch = useDispatch()

  return (
    <div className="book">
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <button onClick={()=> dispatch(deleteBook(book._id))}className="close"><FaRegTrashAlt /></button>
    </div>
  )
}

export default BookEntry
