import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const PostDetails = (props) => {
  const { post, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (post) {
    return (
      <div className="container section post-details" id={post.id}>
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p>{post.content}</p>
            <img className="responsive-img" alt="not authorized" src={post.image}/>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted By {post.authorFirstName + " " + post.authorLastName}</div>
            <p>{moment(post.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading Post</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(PostDetails)
