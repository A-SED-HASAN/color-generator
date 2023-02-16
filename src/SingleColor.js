import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)

  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ background: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        toast.success('copied to clipBoard')
        navigator.clipboard.writeText(hexValue)
      }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>

      {alert && (
        <ToastContainer
          position='top-right'
          autoClose={2000}
          closeOnClick
          theme='light'
        />
      )}
    </article>
  )
}

export default SingleColor
