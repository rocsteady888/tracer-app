const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
  return admin.firestore().collection('notifications')
  .add(notification)
  .then(doc => {
    console.log('notification added');
  })
}

exports.postCreated = functions.firestore
.document('posts/{postId}')
.onCreate(doc => {
  const post = doc.data();
  const notification = {
    content: 'Added a new post',
    user: `${post.authorFirstName} ${post.authorLastName}`,
    time: post.createdAt
  }

  return createNotification(notification);
});

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
          content: 'Joined',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: newUser.createdAt
        }
        return createNotification(notification);
      })
})