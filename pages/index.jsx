import React, { Fragment } from 'react'
import Hero from '../components/hero/Hero'
import FeaturedPosts from '../components/featured-posts/FeaturedPosts'


const DUMMY_POSTS = [
  {
    title : "Next js blog post",
    image : "getting-started-nextjs.png" , 
    excerpt : "Next js is a popular React frame work" , 
    date : "2024-06-30" , 
    slug : "getting-started-nextjs"
  },
  {
    title : "Next js 2 blog post",
    image : "getting-started-nextjs.png" , 
    excerpt : "Next js is a popular React frame work" , 
    date : "2024-06-29" , 
    slug : "getting-started-nextjs2"
  },
  {
    title : "Next js 3 blog post",
    image : "getting-started-nextjs.png" , 
    excerpt : "Next js is a popular React frame work" , 
    date : "2024-06-28" , 
    slug : "getting-started-nextjs3"
  },
  {
    title : "Next js 4 blog post",
    image : "getting-started-nextjs.png" , 
    excerpt : "Next js is a popular React frame work" , 
    date : "2024-06-27" , 
    slug : "getting-started-nextjs4" 
  },
]


const Home = () => {
  return (
    <Fragment>
        <Hero/>
        <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
  )
}

export default Home