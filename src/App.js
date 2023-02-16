import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [tint, setTint] = useState('')
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(tint))

  const submitHandler = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(tint)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <input
          type='number'
          className='number'
          value={tint}
          onChange={(e) => {
            if (e.target.value > 0 && e.target.value <= 100) {
              setTint(parseInt(e.target.value))
            }
            if (color) {
              let colors = new Values(color).all(tint)
              setList(colors)
            }
          }}
          placeholder='10'
        />
        <form onSubmit={submitHandler}>
          <input
            className={error ? 'error' : ''}
            type='text'
            name=''
            id=''
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
            placeholder='#f15025'
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
