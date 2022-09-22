import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createBook} from '../features/books/bookSlice'


function BookForm() {
    const [title, setTitle] = useState('') 
    const [author, setAuthor] = useState('') 
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createBook({title, author}))
        setTitle('')
        setAuthor('')
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title"></label>
                <input 
                type="text" 
                name="title" 
                id="title" 
                placeholder="Book Title"
                value={title} 
                onChange={(e)=>setTitle(e.target.value)} />
                <label htmlFor="author"></label>
                <textarea 
                type="text" 
                name="author" 
                id="author" 
                placeholder="Author Name"
                value={author} 
                onChange={(e)=>setAuthor(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    Add Book
                </button>
            </div>
        </form>
    </section>
    )
}

export default BookForm