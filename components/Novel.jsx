import React from 'react'

export default ({ id, title, author }) => (<li key={id}>{`${title} by ${author}`}</li>)
