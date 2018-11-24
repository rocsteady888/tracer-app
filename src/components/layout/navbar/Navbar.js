import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignInLink';
import SignedOutLinks from './SignOutLink';
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo hide-on-med-and-down">Tracer</Link>
        <Link to='/' className="brand-logo left show-on-medium-and-down">Tracer</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)