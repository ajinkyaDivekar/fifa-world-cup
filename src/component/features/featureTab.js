import React from 'react'
import { Link, useRouteMatch } from "react-router-dom";

export default function FeatureTab() {
  let match = useRouteMatch();
  return (
        <ul>
          <li>
            <Link to={`${match.url}/hooks`}>Hooks</Link>
          </li>
          <li>
            <Link to={`${match.url}/forwordRef`}>
              ForwordRef
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/asyncAwait`}>
              Await/Async
            </Link>
          </li>
        </ul>
      )
}
