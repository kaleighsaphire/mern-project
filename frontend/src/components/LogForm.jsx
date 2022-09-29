import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createLog} from '../features/logs/logSlice'


function LogForm() {
    const [title, setTitle] = useState('') 
    const [text, setText] = useState('') 
    const [rating, setRating] = useState('') 
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createLog({title, text, rating}))
        setTitle('')
        setText('')
        setRating('')
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
                <label htmlFor="text"></label>
                <textarea 
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
                        <option>Select a star rating for book</option>
                        <option value="1">1 - Would not recommend</option>
                        <option value="2">2 - Not for me</option>
                        <option value="3">3 - Decent</option>
                        <option value="4">4 - Mostly enjoyed</option>
                        <option value="5">5 - This one is a favourite</option>
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