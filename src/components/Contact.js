import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    // background image
    <div className='contact'>
      <div>
          <img     className='bg'
            src='https://kettleheroes.com/wp-content/uploads/2022/02/Why-is-Popcorn-a-Movie-Food.jpg'
            alt=""/>
      </div>
    {/* content contact */}
      <div className='content' >

      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter your Full name :</Form.Label>
        <Form.Control type="text" placeholder="Full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter your Email:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter your Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter your message:</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Message" />
      </Form.Group>

      <Button type="submit">Send</Button>

    </Form>
        


      </div>
    </div>
  )
}

export default Contact