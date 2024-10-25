
import React from 'react'
import PropTypes from 'prop-types'

const BookMark = ({bookmark}) => {
    const {title,author} =bookmark
  return (
    <div className='bg-slate-200 p-4 m-4 rounded-xl'>
        <h1>{title}</h1>
        <h1>{author}</h1>
    </div>
  )
}
















BookMark.propTypes = {
    bookMarks:PropTypes.array
}

export default BookMark