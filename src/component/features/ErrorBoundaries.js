import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    console.log(error,'getDerivedStateFromError')
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error,errorInfo,'errorInfo')
    /* this.setState({
      error: error,
      errorInfo: errorInfo
    }) */
  }
  componentDidMount() {
    console.log('cmd')
  }
  render() {

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
