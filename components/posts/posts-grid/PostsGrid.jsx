import React from 'react'
import classes from  "./posts-grid.module.css"
import PostItem from '../post-item/PostItem'


const PostsGrid = ({posts}) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </ul>
  )
}

export default PostsGrid