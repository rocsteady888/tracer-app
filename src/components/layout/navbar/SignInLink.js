import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/create'>New Post</NavLink></li>
      <li><NavLink to='/' onClick={props.signOut} >Sign Out</NavLink></li>
      <li><NavLink to='/account' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => {
      dispatch(signOut())
    }
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)