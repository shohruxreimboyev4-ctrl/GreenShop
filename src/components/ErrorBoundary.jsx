import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can log the error to an external service here
    console.error('ErrorBoundary caught error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-50 text-red-700 rounded">
          <h2 className="font-semibold">Xatolik yuz berdi</h2>
          <p className="mt-2 text-sm">{String(this.state.error)}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
