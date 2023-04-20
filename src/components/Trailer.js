import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import ReactStars from "react-rating-stars-component";

function Trailer({movies}) {
    const params=useParams();
    const movie= movies.filter((el)=>el.name===params.name)[0]
    console.log(movie)
  return (
    <div className='trailer' 
    // style={{backgroundImage: `url(${movie.posterurl})`, backgroundSize: "100%"}}
    >
<div>
    <img     className='bg'
    src={movie.posterurl}
    alt=""/>
</div>
<div className='content' >

        <div className='name-trailer'>
        <h1>{movie.name}</h1>
        <ReactStars count={5} size={24} activeColor="#ffd700" edit={false} value={movie.rating} />
        </div>
        <div className='trailer-video'> 
        <ReactPlayer url={movie.trailer} width='1200px' height='500px' playing='true' />
        
        </div>
        <p>{movie.description}</p>
    </div>

</div>
  )
}

export default Trailer