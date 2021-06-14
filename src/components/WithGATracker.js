import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';

const hasGAId = !!process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

if (hasGAId) {
    GoogleAnalytics.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
}

const WithGATracker = (WrappedComponent, options = {}) => {
    const trackPage = page => {
      GoogleAnalytics.set({
        page,
        ...options,
      });
      GoogleAnalytics.pageview(page);
    };
  
    const HOC = class extends Component {
      componentDidMount() {
        const page = this.props.location.pathname;
        trackPage(page);
      }
  
      componentWillReceiveProps(nextProps) {
        const currentPage = this.props.location.pathname;
        const nextPage = nextProps.location.pathname;
  
        if (currentPage !== nextPage) {
          trackPage(nextPage);
        }
      }
  
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  
    return HOC;
  };
  
  export default WithGATracker;