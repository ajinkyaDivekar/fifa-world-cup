import React, {lazy} from 'react'
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";
import ErrorBoundaries from './ErrorBoundaries';
import ForwordRef from './hooks/ForwordRef';
const FeaturesHooks = lazy(() => import('./hooks'));

const FeaturesRoute = () => {
  let match = useRouteMatch();
  return (
    <Switch>
    <Route path={`${match.path}/hooks`}>
    <ErrorBoundaries >
      <FeaturesHooks/>
    </ErrorBoundaries>
    </Route>
      <Route path={`${match.path}/ForwordRef`}>
      <ForwordRef />
      </Route>
  </Switch>
  )
}

export default FeaturesRoute;
