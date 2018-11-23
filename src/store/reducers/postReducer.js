const initState = {
  posts: [
    {id: '1', title: 'normal sinus rhythm', content: 'this is normal sinus rhythm with no ectopy'},
    {id: '2', title: 'sinus tachycardia', content: 'this is a fast rate'},
    {id: '3', title: 'sinus bradycardia', content: 'Slow rate with P waves and narrow QRS'},
  ]
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      console.log('created post', action.post)
      return state;
    case 'CREATE_POST_ERROR':
      console.log('error', action.err)
      return state;
    default:
      return state;
  }
}

export default postReducer;