import React from 'react';

export default class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; info?: string }>{
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, info: any) {
    console.error("EmphzSite runtime error:", error, info);
    this.setState({ info: String(info?.componentStack || "") });
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
    return this.props.children as any;
  }
}