import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Account extends React.Component {
  render() {
    const { auth } = this.props;

    if ( !auth.uid ) return <Redirect to='/signin' />
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
          Account Page
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts', limit: 15, orderBy: ['createdAt', 'desc'] },

    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
  ])
)(Account);