import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AiOutlineVideoCameraAdd } from "react-icons/ai";

function AddMovie({movies , setmovies}) {
  // state declaration variable
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
// state declaration newmovie
    const [newmovie, setnewmovie] = useState({
        name:"",
        posterurl:"",
        description:"",
        rating:"",
        trailer: "",
    })
// state declaration function
    const add=()=>{
        setmovies([...movies, newmovie])
    }


  return (
    <div>
        <>

{/* button pour afficher modal */}

      <AiOutlineVideoCameraAdd onClick={handleShow} size='3rem' color='#4b6043' style={{backgroundColor:'#b3cf99', marginLeft:'15px', borderRadius:'10px'}} />
    
{/* modal add movie */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
{/* modal body */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setnewmovie({...newmovie, name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Url image</Form.Label>
        <Form.Control type="text" placeholder="Enter movie url image" onChange={(e)=>setnewmovie({...newmovie, posterurl:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" placeholder="Enter movie description" onChange={(e)=>setnewmovie({...newmovie, description:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rating</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating" onChange={(e)=>setnewmovie({...newmovie, rating:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie trailer url</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating" onChange={(e)=>setnewmovie({...newmovie, trailer:e.target.value})} />
      </Form.Group>

    </Form>
{/* footer */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{add(); handleClose()}}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddMovie