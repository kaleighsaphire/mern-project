import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getLogs, reset} from '../features/logs/logSlice'
import LogForm from '../components/LogForm'
import LogEntry from '../components/LogEntry'
import Spinner from '../components/Spinner'
import Heading from '../components/Heading'

function Blog() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showLogForm, setShowLogForm] = useState(false)

  const {user} = useSelector((state) => state.auth)
  const {logs, isLoading, isError, message} = useSelector((state) => state.logs)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user){
      navigate('/login')
      return
    }

    dispatch(getLogs())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading){
    return <Spinner />
  }

  return (
    <>
      <div className="pencil-container">
        <div className="pencil-body">
          <div className="pencil-tip"></div>
          <div className="pencil-tippy-tip"></div>
          <div className="pencil-journal">
            <h6>JOURNAL</h6>
          </div>
        </div>
      </div>
    <Heading
        onAdd={() => setShowLogForm(!showLogForm)}
        showAdd={showLogForm}
      />
    {showLogForm && <LogForm onAdd={LogForm} />}

    <section className="content">
      {logs.length > 0 ? (
        <div className="logs">
          {logs.map((log) => (
            <LogEntry key={log._id} log={log} />
          )).reverse()}
        </div>
      ) : (
      <h3>No log entries</h3>
      )}
    </section>
    </>
  )
}

export default Blog