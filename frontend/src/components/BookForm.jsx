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
    // const [read, setRead] = useState('')


    const dispatch = useDispatch()
    const location = useLocation()


    const onSubmit = e => {
        e.preventDefault()

        if (!title){
            toast.error("Please enter a title", {
              position: toast.POSITION.TOP_CENTER,
              className: "alert alert-error",
            })
        } else if (!author){
            toast.error("Please enter author's name", {
              position: toast.POSITION.TOP_CENTER,
              className: "alert alert-error",
            })
        } else if (!genre){
            toast.error("Please choose a genre", {
              position: toast.POSITION.TOP_CENTER,
              className: "alert alert-error",
            })
        } else {
            location.pathname === '/library' ? dispatch(createBook({title, author, genre})) : dispatch(createBook({title, author, genre, own}))
        
            setTitle('')
            setAuthor('')
            setGenre('')
            // setRead{''}
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
                        <option value="Adventure">Adventure</option>
                        <option value="Biography">Biography</option>
                        <option value="Classic">Classic</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Graphic-Novel">Graphic Novel</option>
                        <option value="History">History</option>
                        <option value="Literary-Fiction">Literary Fiction</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Philosophy">Philosophy</option>
                        <option value="Poetry">Poetry</option>
                        <option value="Romance">Romance</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Self-Help">Self-Help</option>
                        <option value="Short-Stories">Short Stories</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Young Adult">Young Adult</option>
                </select>
                <div className="checkbox">
                    <label htmlFor="checkbox" className="checkbox">Read:</label>
                    <input type="checkbox" name="checkbox" className="checkbox" />
                </div>
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