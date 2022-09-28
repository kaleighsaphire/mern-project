import { useLocation } from 'react-router-dom'
import Button from './Button'

const Heading = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

  return (
    <section className="heading">
      {<Button color={showAdd ? 'rgb(227, 33, 101)': 'rgba(80, 146, 126)'} text={showAdd ? 'Close' : '+ Add'} onClick={onAdd} />}
      <h1>{location.pathname === '/library' ? 'Library' : 'Reading Journal'}</h1>
    </section>
  )
}

export default Heading