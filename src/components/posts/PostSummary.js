import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

const PostSummary = ({post}) => {
  return (
    <div className="card z-depth-0 post-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>{post.content}</p>
        <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
        <p>{moment(post.createdAt.toDate()).calendar()}</p>
        <img className="responsive-img" alt="not authorized" src={post.image}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(PostSummary);