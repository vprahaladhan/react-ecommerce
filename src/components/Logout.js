import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = ({ user, setUser }) => {
  React.useEffect(() => {
    user && setUser(null);
  }, [])

  return <Redirect to='/login' />
}

export default Logout;