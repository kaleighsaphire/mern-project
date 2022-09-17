import {useDispatch} from 'react-redux'
import {deleteLog} from '../features/logs/logSlice'

const LogEntry = ({log}) => {
    const dispatch = useDispatch()

  return (
    <div className="log">
      <div>
        {new Date(log.createdAt).toLocaleString('en-US')}
      </div>
      <h2>{log.title}</h2>
      <h3>{log.text}</h3>
      <button onClick={()=> dispatch(deleteLog(log._id))}className="close">X</button>
    </div>
  )
}

export default LogEntry
