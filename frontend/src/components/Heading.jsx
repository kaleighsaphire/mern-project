import Button from './Button'

const Heading = ({ title, onAdd, showAdd }) => {

  return (
    <section className="heading">
      {<Button color={showAdd ? 'rgb(227, 33, 101)': 'rgba(80, 146, 126)'} text={showAdd ? 'Close' : '+ Add'} onClick={onAdd} />}
    </section>
  )
}

export default Heading