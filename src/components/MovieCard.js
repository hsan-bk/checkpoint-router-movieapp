import React from 'react'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";

function MovieCard({el}) {
// state declaration variable
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
  <>
{/* card movie items */}     
    <div className='cardmovie' onClick={handleShow}>     
      <div className='image-container d-flex justify-content-start m-3'>
        <img src={el.posterurl} alt='movie'></img>
        <div className='overlay d-flex align-items-center justify-content-center'>
          {el.name}  
          <ReactStars count={5} size={24} activeColor="#ffd700" edit={false} value={el.rating} /> 
        </div> 
      </div>
     </div>
    
{/* modal affiché en cliquant card movie */}
    <Modal show={show} onHide={handleClose} animation={false} size='lg' className='modalfilm'>
        <Modal.Header closeButton>
          <Modal.Title>Movie details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalcontainer'>
          <div>
          <img src={el.posterurl} alt='movie'></img>
          <h3>{el.name}  </h3>
           <p>{el.description}</p> 
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to= {`/trailer/${el.name}`}>
          
          <FaPlay size='2rem' color='red'/>
          </Link>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MovieCard