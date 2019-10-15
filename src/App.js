import React, { Suspense } from 'react';

const ReactThread = React.lazy(() => import('./components/react-thread/react-thread'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ReactThread />
      </Suspense>
    </div>
  );
}

export default App;
