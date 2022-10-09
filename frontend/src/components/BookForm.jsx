import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import {createBook} from '../features/books/bookSlice'


function BookForm() {
    const [title, setTitle] = useState('') 
    const [firstName, setFirstName] = useState('') 
    const [lastName, setLastName] = useState('') 
    const [genre, setGenre] = useState('')
    const [own] = useState(Boolean)
    const [read, setRead] = useState(Boolean)


    const dispatch = useDispatch()
    const location = useLocation()


    const onSubmit = e => {
        e.preventDefault()

        if (!title){
            toast.error("Please enter a title", {
              position: toast.POSITION.TOP_CENTER,
              className: "alert alert-error",
            })
        } else if (!lastName){
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
            location.pathname === '/library' ? dispatch(createBook({title, firstName, lastName, genre, read})) : dispatch(createBook({title, firstName, lastName, genre, own}))
            
            setTitle('')
            setFirstName('')
            setLastName('')
            setGenre('')
            setRead(true)
        }
        
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <div className="form-section">
                    <label htmlFor="title"><sup>* </sup> Title :</label>
                    <input 
                    spellcheck="true"
                    type="text" 
                    name="title" 
                    id="title" 
                    placeholder="Book title here..."
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="form-section">
                    <label htmlFor="fistName">Author's Name :</label>
                    <input 
                    type="text" 
                    name="firstName" 
                    id="firstName" 
                    placeholder="First name"
                    value={firstName} 
                    onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div className="form-section">
                    <label htmlFor="lastName"><sup>* </sup> Last Name :</label>
                    <input 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    placeholder="Last name"
                    value={lastName} 
                    onChange={(e)=>setLastName(e.target.value)} />
                </div>
                <div className="form-section">
                    <label htmlFor="genre"><sup>* </sup> Genre :</label>
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
                </div>
                {location.pathname === '/library' ? 
                <div className="form-checkbox">
                    <label htmlFor="checkbox" id="checkbox-label">Read :</label>
                    <input 
                    type="checkbox" 
                    name="checkbox" 
                    className="checkbox"
                    value={true}
                    onChange={(e)=>setRead(e.target.value)}
                    />
                </div> : ''}
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