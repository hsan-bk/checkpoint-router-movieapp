import React from 'react'

function About() {
  return (
    // background image
    <div className='about'>
      <div>
          <img     className='bg'
            src='https://kettleheroes.com/wp-content/uploads/2022/02/Why-is-Popcorn-a-Movie-Food.jpg'
            alt=""/>
      </div>
    {/* content about */}
      <div className='content' >

        <h1>Welcome to our movie app!</h1>
        <h5 style={{alignItems:'center', marginLeft:'50px', marginRight:'50px'}}> Our app is your go-to destination for finding and watching your favorite movies and TV shows. With a vast collection of titles across multiple genres, personalized recommendations, and user-friendly navigation, our app makes it easy to discover new content and enjoy the classics.</h5>
        <h6>Our app offers:</h6>
        <ul>
          <li>A comprehensive library of movies and TV shows across various genres</li>
          <li>Personalized recommendations based on your viewing history and preferences</li>
          <li>User-friendly navigation to help you easily find what you're looking for</li>
          <li>Multiple viewing options, including streaming and downloading for offline viewing</li>
          <li>High-quality streaming in HD</li>
          <li>Accessibility across multiple devices, including smartphones, tablets, and smart TVs</li>
        </ul>
        <h6 style={{alignItems:'center', marginLeft:'50px', marginRight:'50px'}}>We are passionate about providing a seamless and enjoyable experience for our users. If you have any feedback or questions, please reach out to us at support@movieapp.com. Thank you for choosing our app for all your movie and TV show needs!</h6>
        

      </div>
    </div>
  )
}

export default About