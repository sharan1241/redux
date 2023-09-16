import React from 'react'
import "../styles/sidebar.css"
import Button from 'react-bootstrap/Button';

function Sidebar() {
  return (
    <div id='side'>
      <p id='title'>Notes App</p>
      <Button id='button'>Notes</Button>
    </div>
  )
}

export default Sidebar