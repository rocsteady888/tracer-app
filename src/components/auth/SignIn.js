import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSumbit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <form onSubmit={this.handleSumbit} className="white">
              <h5 className="grey-text text-darken-3">Sign In</h5>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign In</button>
                <div className="red-text center">
                  { authError ? <p>{authError}</p> : null }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (credentials) => {
      dispatch(signIn(credentials))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)