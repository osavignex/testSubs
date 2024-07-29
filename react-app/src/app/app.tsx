// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Subs } from 'subs-react';

import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';

export function App() {
  const handleResponseSubscribed = (response: {
    success: boolean;
    message: string;
  }) => {
    console.log('This is what happened', response);
  };
  return (
    <div>
      <Subs
        address={'0x687Dc893A438CFdBE30c9CCf73cA5e695E38D791'}
        appId="22"
        chain={'bsc-testnet'}
        defaultPayment="Premium"
        choice={{
          payment: 'Premium',
          token: '0x337610d27c682e347c9cd60bd4b3b107c9d34ddd',
        }}
        dataOnSubs={handleResponseSubscribed}
        apiKey={'9gn3ssv5lzvl3h4w2ocff630nzwqmr'}
        mode={'testnet'}
      />
      <NxWelcome title="react-app" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
