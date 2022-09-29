import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

export const Bootstrap = () => {

  const style={
    width: '1000px'
  }
  return (
    <div>
        
      <header className="App-header">
        <Container style={style}>
          <Form>
            <Row>
              <Col >
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Example@email.com' ></Form.Control>
                  <Form.Text className='text-muted' > We'll never share your email address, Trust us!</Form.Text>
                </Form.Group>
              </Col>
              <Col md>
              <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='password' />
              </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Example@email.com' ></Form.Control>
                  <Form.Text className='text-muted' > We'll never share your email address, Trust us!</Form.Text>
                </Form.Group>
              </Col>
              <Col md>
              <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='password' />
              </Form.Group>
              </Col>
            </Row>
              <Button variant='secondary' type='submit'>Login</Button>
          </Form>
          <Card className='mt-3' style={{ color: '#000' }} >
            <Card.Img style={{height: '350px'}} src='/images/tree.jpg' />
            <Card.Body>
              <Card.Title>
                Card Example
              </Card.Title>
              <Card.Text>
                This is an example of react bootstap cards
              </Card.Text>
              <Button variant='primary'>Read More</Button>
            </Card.Body>
          </Card>
        </Container>
      </header>
    </div>
  )
}
