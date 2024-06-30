import React from 'react'
import AllPosts from '../../components/posts/all-posts/AllPosts'


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



const PostsPage = () => {
  return (
    <AllPosts posts={DUMMY_POSTS}/>
  )
}

export default PostsPage