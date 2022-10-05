import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import {createBook} from '../features/books/bookSlice'


function BookForm() {
    const [title, setTitle] = useState('') 
    const [author, setAuthor] = useState('') 
    const [genre, setGenre] = useState('')
    const [own] = useState(Boolean)

    const dispatch = useDispatch()
    const location = useLocation()


    const onSubmit = e => {
        e.preventDefault()

        if (!title || !author || !genre) {
            toast.error("PLEASE FILL ALL AVAILABLE FIELDS", {
              position: toast.POSITION.TOP_CENTER,
              className: "alert alert-error",
            });
        }else{
            location.pathname === '/library' ? dispatch(createBook({title, author, genre})) : dispatch(createBook({title, author, genre, own}))
        
            setTitle('')
            setAuthor('')
            setGenre('')
        }
        
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                spellcheck="true"
                type="text" 
                name="title" 
                id="title" 
                placeholder="Book title here..."
                value={title} 
                onChange={(e)=>setTitle(e.target.value)} />
                <label htmlFor="author">Author</label>
                <input 
                type="text" 
                name="author" 
                id="author" 
                placeholder="Author's name here..."
                value={author} 
                onChange={(e)=>setAuthor(e.target.value)} />
                <label htmlFor="genre">Genre</label>
                <select type="text" 
                    name="genre" 
                    id="genre" 
                    value={genre} 
                    onChange={(e)=>setGenre(e.target.value)}>
                        <option>Select a genre</option>
                        <option value="Biography">Biography</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="History">History</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Self-Help">Self-Help</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Young Adult">Young Adult</option>
                </select>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    Add Book To Library
                </button>
            </div>
        </form>
    </section>
    )
}

export default BookForm