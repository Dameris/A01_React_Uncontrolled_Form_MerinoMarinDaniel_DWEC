import PropTypes from 'prop-types'
import { useState } from 'react'

function MyButton({ text, age }) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    console.log("Has hecho click")
  };

  return (
    <button onClick={handleClick}>Counter: {count}</button>
  )
}

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
}

export default MyButton