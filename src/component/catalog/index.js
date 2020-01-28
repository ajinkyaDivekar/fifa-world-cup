import React, { Component } from 'react';
import Sidebar from './sidebar';
import Filters from './filters';
import Products from './products';
import './index.scss';
export default class Catalog extends Component {
  render() {
    return (
      <div id="catalog">
          <h1 title="catalog"> Catalog Page</h1>
          <div class="catalog-page">
            <section class="left-section">
              <Sidebar />
            </section>
            <section class="right-section">
              <Filters />
              <Products />
            </section>
          </div>
      </div>
    )
  }
}
