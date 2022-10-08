import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { toast } from 'react-toastify'
import {createLog} from '../features/logs/logSlice'


function LogForm() {
    const [title, setTitle] = useState('') 
    const [lastName, setLastName] = useState('') 
    const [firstName, setFirstName] = useState('') 
    const [text, setText] = useState('') 
    const [rating, setRating] = useState('') 
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        if (!title){
            toast.error("Please enter a title", {
              position: toast.POSITION.TOP_CENTER,
              className: "alert alert-error",
            })
        } else if (!lastName){
            toast.error("Please fill out author's last name", {
              position: toast.POSITION.TOP_CENTER,
              className: "alert alert-error",
            })
        } else if (!text){
            toast.error("Please fill out the journal entry", {
              position: toast.POSITION.TOP_CENTER,
              className: "alert alert-error",
            })
        } else if (!rating){
            toast.error("Please submit a rating", {
              position: toast.POSITION.TOP_CENTER,
              className: "alert alert-error",
            })
        } else {
            dispatch(createLog({title, lastName, firstName, text, rating}))
            setTitle('')
            setLastName('')
            setFirstName('')
            setText('')
            setRating('')
        }
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title"></label>
                <input 
                spellcheck="true"
                type="text" 
                name="title" 
                id="title" 
                placeholder="Book Title"
                value={title} 
                onChange={(e)=>setTitle(e.target.value)} />
                <label htmlFor="lastName"></label>
                <input 
                spellcheck="true"
                type="text" 
                name="lastName" 
                id="lastName" 
                placeholder="Last Name of Author"
                value={lastName} 
                onChange={(e)=>setLastName(e.target.value)} />
                <label htmlFor="firstName"></label>
                <input 
                spellcheck="true"
                type="text" 
                name="firstName" 
                id="firstName" 
                placeholder="First Name of Author"
                value={firstName} 
                onChange={(e)=>setFirstName(e.target.value)} />
                <label htmlFor="text"></label>
                <textarea 
                spellcheck="true"
                type="text" 
                name="text" 
                id="text" 
                placeholder="Reading log entry..."
                value={text} 
                onChange={(e)=>setText(e.target.value)} />
                <select type="text"
                    name="rating" 
                    id="rating" 
                    value={rating} 
                    onChange={(e)=>setRating(e.target.value)}>
                        <option>Rate Book</option>
                        <option value="1">1 - Horrible</option>
                        <option value="2">2 - Bad</option>
                        <option value="3">3 - Average</option>
                        <option value="4">4 - Good</option>
                        <option value="5">5 - Fantastic</option>
                </select>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    Add Entry
                </button>
            </div>
        </form>
    </section>
    )
}

export default LogForm