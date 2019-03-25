import React from "react";



const PostListing = ({post}) => <article>
    {/* <h3>{post.frontmatter.title}</h3>
    <span>{post.frontmatter.date}</span> */}
    {/* <div dangerouslySetInnerHTML={{
        __html: post.html
    }} /> */}
   
    <h3>Post</h3>
    <p>{post.excerpt}</p>
</article>;


export default PostListing;