import React from 'react'
import clasess from "./all-posts.module.css"
import PostsGrid from '../posts-grid/PostsGrid'


const AllPosts = ({posts}) => {
  return (
    <section className={clasess.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts}/>
    </section>
  )
}

export default AllPosts