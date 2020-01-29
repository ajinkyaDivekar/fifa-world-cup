import React, {Suspense, lazy } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";

const Catalog = lazy(() => import('../component/catalog'));
const Features = lazy(() => import('../component/features'));
const Hooks = lazy(() => import('../component/hooks'));

export default function BasicRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/features" component={Features}/>
        <Route path="/catalog" component={Catalog}/>
        <Route path="/hooks" component={Hooks}/>
        <Route path="/users" component={Users}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Suspense>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}


// nested Route
