import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className="hero-content">
            <h1 className='heading-primary'>
                <span>Welcome</span> to FlavorFinder
            </h1>

            <p className='text-white'>The best gourmet restaurant available in Manhatten</p>

            <p className='text-white'>
                Book online or call <span className='special-word'>+919067595124</span>
            </p>
        </div>

    </div>
  )
}

export default Hero
