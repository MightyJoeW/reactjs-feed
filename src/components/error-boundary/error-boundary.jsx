import React, { Component, Fragment } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: 'N/A',
    errorInfo: 'N/A'
  };

  static getDerivedStateFromError = error => {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  };

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { error, errorInfo, hasError } = this.state;
    if (hasError) {
      // Error path
      return (
        <Fragment>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </Fragment>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}