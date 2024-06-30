import React, { Fragment } from 'react'
import Hero from '../components/hero/Hero'
import FeaturedPosts from '../components/featured-posts/FeaturedPosts'


const Home = () => {
  return (
    <Fragment>
        <Hero/>
        <FeaturedPosts/>
    </Fragment>
  )
}

export default Home