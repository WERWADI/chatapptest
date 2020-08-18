import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';

export default function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  });
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  }
  return (
    <div>
      <h2>Welcome, { user && user.username }</h2>
      <AmplifySignOut />
    </div>
  )
}