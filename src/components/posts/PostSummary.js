import React from 'react'
import moment from 'moment'

const PostSummary = ({post}) => {
  return (
    <div className="card z-depth-0 post-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>{post.content}</p>
        <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
        <p>{moment(post.createdAt.toDate()).calendar()}</p>
        {post.image ? <img alt='You are not authorized.' src={post.image}/> : <p>No Image</p> }
      </div>
    </div>
  )
}

export default PostSummary;