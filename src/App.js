import React from 'react'
import Auth from './components/Auth'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Row>
        <Col sm={3}><Sidebar/></Col>
        <Col sm={9} id='back'>
          <Routes>
          <Route path='/redux/' element={<Auth/>}/>
          </Routes>
        </Col>
      </Row>
      </BrowserRouter>
    </div>
  )
}

export default App