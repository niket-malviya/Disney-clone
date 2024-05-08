// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(
// <Auth0Provider
//     domain="dev-mj3ckaa0majgrpxv.us.auth0.com"
//     clientId="VA34zD6Ipn3QxkMDtS2A9Dd6rGdpwhMP"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>
// );



// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(
//   <Auth0Provider
//     domain="dev-mj3ckaa0majgrpxv.us.auth0.com"
//     clientId="VA34zD6Ipn3QxkMDtS2A9Dd6rGdpwhMP"
//     redirectUri={window.location.origin}
//   >
//     <App />
//   </Auth0Provider>
// );








import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

const AuthenticatedApp = () => {
  const { logout } = useAuth0();
  const logoutDestination = window.location.origin;

  return (
    <App logout={logout} logoutDestination={logoutDestination} />
  );
};

root.render(
  <Auth0Provider
    domain="dev-mj3ckaa0majgrpxv.us.auth0.com"
    clientId="VA34zD6Ipn3QxkMDtS2A9Dd6rGdpwhMP"
    redirectUri={window.location.origin}
  >
    <AuthenticatedApp />
  </Auth0Provider>
);
