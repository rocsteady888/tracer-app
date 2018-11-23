import React from 'react'
import Notifications from './Notifications'
import PostList from '../../posts/PostList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    const { posts, auth } = this.props;

    if ( !auth.uid ) return <Redirect to='/signin' />
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <PostList posts={posts}/>
          </div>
          <div className="col s12 m6">
            <Notifications/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(Dashboard);