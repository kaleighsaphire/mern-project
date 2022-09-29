import {useDispatch} from 'react-redux'
import {FaRegTrashAlt} from 'react-icons/fa'
import {deleteLog} from '../features/logs/logSlice'

const LogEntry = ({log}) => {
    const dispatch = useDispatch()

  return (
    <div className="log">
      <div>
        <span className="date">{new Date(log.createdAt).toLocaleString([], { dateStyle: 'short'})}</span>
      </div>
      <div className="star-rating">
        
      </div>
      <h3>{log.title}</h3>
      <p>{log.text}</p>
      <button onClick={()=> dispatch(deleteLog(log._id))}className="delete-log"><FaRegTrashAlt /></button>
    </div>
  )
}

export default LogEntry
