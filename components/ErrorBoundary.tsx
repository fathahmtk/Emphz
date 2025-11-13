import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  info?: string;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // FIX: Initialize state as a class property instead of in the constructor.
  // This is a more modern syntax and should resolve the type errors by ensuring 'this' is correctly scoped.
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("EmphzSite runtime error:", error, info);
    this.setState({ info: info.componentStack });
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <section className="mx-auto max-w-3xl p-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">Something went wrong.</h2>
          <p className="mt-2 text-sm text-slate-500">The page recovered gracefully. Check console for details.</p>
          <a href="#home" className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white">Back to top</a>
        </section>
      );
    }
    return this.props.children;
  }
}
