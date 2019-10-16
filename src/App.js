import React, { lazy, Suspense } from 'react';

const ErrorBoundary = lazy(() => import('./components/error-boundary/error-boundary'));
const ReactThread = lazy(() => import('./components/react-thread/react-thread'));

const App = () => {
  return (
    <>
      <h1> /r/reactjs </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <ReactThread />
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
