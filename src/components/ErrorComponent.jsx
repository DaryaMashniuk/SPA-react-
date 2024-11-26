import React from 'react';

const ErrorComponent = ({ error, retry }) => {
  return (
    <div className="error">
      <h2>Oops! Something went wrong.</h2>
      <p>{error?.message || "An unexpected error occurred."}</p>
      {error?.status === 404 ? (
        <p>The page you're looking for might have been moved or deleted.</p>
      ) : (
        <p>It seems there was a problem loading this page. Please try again.</p>
      )}
      <button onClick={retry} className="retry-button">
        Retry
      </button>
    </div>
  );
};

export default ErrorComponent;
