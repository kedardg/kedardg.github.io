import React from "react";
import "./ErrorBoundary.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to analytics or error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    
    // You can add error reporting service here
    // Example: errorReportingService.log(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <h2>Oops! Something went wrong</h2>
            <p>
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="error-boundary-actions">
              <button 
                onClick={this.handleRetry}
                className="error-boundary-retry-btn"
                aria-label="Try again"
              >
                Try Again
              </button>
              <button 
                onClick={() => window.location.reload()}
                className="error-boundary-refresh-btn"
                aria-label="Refresh page"
              >
                Refresh Page
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className="error-boundary-details">
                <summary>Error Details (Development Mode)</summary>
                <pre>{this.state.error?.toString()}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;