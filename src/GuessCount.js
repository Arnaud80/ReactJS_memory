import React from 'react'
import PropTypes from 'prop-types'

import './GuessCount.css';

const GuessCount = ({ guesses, status }) => <div className={`letter ${status}`}>{guesses}</div>

GuessCount.propTypes = {
  guesses: PropTypes.number.isRequired,
  status: PropTypes.oneOf([
    'visible',
    'hidden'
  ]).isRequired,
}

export default GuessCount
