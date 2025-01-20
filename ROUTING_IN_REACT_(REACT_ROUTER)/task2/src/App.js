import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
      <Route>
        <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          </Route>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
