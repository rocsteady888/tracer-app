const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SIGNIN_ERROR':
      console.log('singin error')
      return {
        ...state, 
        authError: 'Singin Failed'
      }
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_ERROR':
      console.log('logout error')
      return state
    case 'SIGNOUT_SUCCESS':
      console.log('logout success')
      return state
    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer;