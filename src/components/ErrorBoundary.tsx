import React, { Component, type ReactNode} from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 
ErrorBoundary component to catch and handle rendering errors in child components.*/
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to display fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log error to external service if needed
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  render() {
    const { fallback = <h2>Something went wrong.</h2> } = this.props;

    if (this.state.hasError) {
      return fallback;
    }

    return this.props.children;
  }
}