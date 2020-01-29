import React, { Component, Suspense, lazy } from 'react';
import { myContext } from './context';
import './index.scss';
import ErrorBoundries from './ErrorBoundries';

const Sidebar = lazy(() => import('./sidebar'));
const Filters = lazy(() => import('./filters'));
const Products = lazy(() => import('./products'));
export default class Catalog extends Component {
  constructor(props) {
    super(props)
    this._mounted = false;
    this.state = {
      brandFilter: ''
    }

    // this.filterFun = this.filterFun.bind(this);
  }


   filterFun =(param) => {
    console.log(this,'param');
    this._mounted = true;
    if(this._mounted){
      this.setState({brandFilter: param})
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }


 /*   filterFun(params) {
     console.log(this, 'this');
    // var self = this;
    console.log(params);
    this.setState({brandFilter: params})
  } */
  render() {
    console.log(myContext)
    let myObj = {
      filterValue : 'working...',
      filterFun : this.filterFun
    };

    let {brandFilter} = this.state;
    return (
      <ErrorBoundries>
      <myContext.Provider value = {myObj}>
      <Suspense fallback={<div>Loading...</div>}>
      <div id="catalog">

          <h1 title="catalog"> Catalog Page</h1>
          <div className="catalog-page">
            <section className="left-section">
              <Sidebar />

            </section>
            <section className="right-section">
              <Filters />
              <Products brandFilter={brandFilter}/>
            </section>
          </div>
      </div>


      </Suspense>
      </myContext.Provider>
      </ErrorBoundries>
    )
  }
}
