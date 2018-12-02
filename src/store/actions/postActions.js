export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const storageRef = getFirebase().storage().ref('images/' + post.file.name);
    storageRef.put(post.file)
      .then(snap => console.log('upload successful', snap.task.uploadUrl_))
      .catch(err => console.error('error uploading file', err))
    storageRef.getDownloadURL().then(function(downloadURL) {
    firestore.collection('posts').add({
      title: post.title,
      content: post.content,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_POST', post });
    }).catch((err) => {
      dispatch({ type: 'CREATE_POST_ERROR', err })
    })
    });
  }
};
