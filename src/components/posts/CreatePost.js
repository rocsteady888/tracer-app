import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom'

class CreatePost extends React.Component {
  state = {
    title: '',
    content: '',
    file: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state)
  }
  handleUpload = (e) => {
    const fileName = e.target.files[0]
    this.setState({
      [e.target.id]: fileName
    })
    console.log(this.state)
  }
  handleSumbit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createPost(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form onSubmit={this.handleSumbit} className="white">
          <h5 className="grey-text text-darken-3">Create New Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} ></textarea>
          </div>
          <input type="file" id="file" onChange={this.handleUpload}/>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Post</button>
          </div>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => {
      dispatch(createPost(post))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);