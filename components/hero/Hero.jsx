import React from 'react'
import clasess from "./hero.module.css"
import Image from 'next/image'


const Hero = () => {
  return (
    <section className={clasess.hero}>

      <div className={clasess.image}>
        <Image
          src="/images/site/laith-profile.JPG" 
          alt='profile image' 
          width={300} 
          height={300} 
        />
      </div>

      <h1>Laith Abu Fadda</h1>

      <p>Full Stack Web Developer -- MERN Stack</p>
      
    </section>
  )
}

export default Hero