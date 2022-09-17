import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createLog} from '../features/logs/logSlice'


function LogForm() {
    const [title, setTitle] = useState('') 
    const [text, setText] = useState('') 
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createLog({title, text}))
        setTitle('')
        setText('')
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Reading Log</label>
                <input type="text" 
                name="title" 
                id="title" 
                placeholder="Entry Title"
                value={title} 
                onChange={(e)=>setTitle(e.target.value)} />
                <input type="text" 
                name="text" 
                id="text" 
                placeholder="Entry Text"
                value={text} 
                onChange={(e)=>setText(e.target.value)} />
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