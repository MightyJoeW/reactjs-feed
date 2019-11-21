// EXTERNAL DEPENDENCIES
import React, { lazy, Suspense, useState, useEffect } from 'react';
import axios from 'axios';

// INTERNAL DEPENDENCIES
const ReactThread = lazy(() => import('./components/react-thread/react-thread'));

// LOCAL VARIABLES
const subReddit = 'reactjs';

// COMPONENT DEFINITION
const App = () => {
  const [feed, setFeed] = useState([]);
  const [baseUrl] = useState('https://www.reddit.com');

  // const [userName] = useState('Joe');
  // const [isUserLoggedIn] = useState(false);

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/${subReddit}.json`).then(res => {
      setFeed(res.data.data.children)
    })
  }, []);

  return (
    <>
      <h1> /r/reactjs </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ReactThread
          baseUrl={baseUrl}
          feed={feed}
        // isUserLoggedIn={isUserLoggedIn}
        // userName={userName}
        />
      </Suspense>
    </>
  );
}

export default App;
