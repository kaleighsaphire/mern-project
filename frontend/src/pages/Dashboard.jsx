import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getLogs, reset} from '../features/logs/logSlice'
import LogForm from '../components/LogForm'
import LogEntry from '../components/LogEntry'
import Spinner from '../components/Spinner'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>What have you been reading?</p>
    </section>

    <LogForm />

    <section className="content">
      {logs.length > 0 ? (
        <div className="logs">
          {logs.map((log) => (
            <LogEntry key={log._id} log={log} />
          ))}
        </div>
      ) : (
      <h3>No log entries</h3>
      )}
    </section>
    </>
  )
}

export default Dashboard