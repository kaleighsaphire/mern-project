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
  let {logs, isLoading, isError, message} = useSelector((state) => state.logs)

  const sortOptions = ["Sort by", "Title", "Author", "Date", "Rating-High", "Rating-Low"]
  const [selected, setSelected] = useState(sortOptions[0])


  if (selected === 'Rating-Low'){
    console.log(logs)
    logs = logs.filter((log) => log).sort((a, b) => Number(a.rating) - Number(b.rating))
    console.log(logs)
  } else if (selected === 'Rating-High'){
    logs = logs.filter((log) => log).sort((a, b) => Number(b.rating) - Number(a.rating))
  } else if (selected === 'Title'){
    logs = logs.filter((log) => log).sort((a, b) => a.title.localeCompare(b.title))
  } else if (selected === 'Date'){
    logs = logs.filter((log) => log).reverse()
  } else if (selected === 'Author'){
    logs = logs.filter((log) => log?.lastName).sort((a, b) => a.lastName.localeCompare(b.lastName))
  }

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
      <form className="sort-form">
          <select className="sort-form"
            value={selected} 
            onChange={e => setSelected(e.target.value)}>
            {sortOptions.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </form>
    {showLogForm && <LogForm onAdd={LogForm} />}

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

export default Blog