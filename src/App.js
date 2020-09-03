import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div>
      <AmplifySignOut />
      <h1>Welcome, you are signed in!</h1>
    </div>
  )
}

export default withAuthenticator(App);
