import React from 'react'
import classes from  "./post-content.module.css"
import PostHeader from '../post-header/PostHeader'
import clasess from "./post-content.module.css"

import ReactMarkdown from "react-markdown" 


const DUMMY_POST =   {
    title : "Next js blog post",
    image : "getting-started-nextjs.png" , 
    date : "2024-06-30" , 
    slug : "getting-started-nextjs",
    content : "# This is a first post"
  }



const PostContent = () => {

    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return (
    <article className={clasess.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath} />
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )

}


export default PostContent