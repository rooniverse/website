import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import routes from '../data/BlogRoutes';
import ScrollToTop from "./ScrollToTop";
import GAListener from './../components/GAListener';

function CustomRouter() {
  return (
    <Router>
      <ScrollToTop />
      <div className="CustomRouter">
        <Switch>
          {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
  
export default CustomRouter;
  