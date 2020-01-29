import React, { Component } from 'react'
import {myContext} from '../context';
export default class Sidebar extends Component {
 constructor(props) {
   super(props)

   this.state = {
      brandData : []
   }
  //  this.filterBrand = this.filterBrand.bind(this);
 }

 async componentDidMount() {
  const response = await fetch(`https://opt-showcase-api-qa.optcentral.com/brands?status=Active&visibility=LEFT&showcase=OOO&retailerId=143`);
  const json = await response.json();
  this.setState({ brandData: json || []});
 }




  filterBrand = (slug, el) => {
    let value = this.context;
    console.log(el, slug,'slug')
    value.filterFun(slug)
  }

  render() {
    return (

      <div id="sidebar">
      <myContext.Consumer>
      {value => value.filterValue}
    </myContext.Consumer>
        <div>Reset filter</div>
        <div>Shop By Keyword</div>
        <div>Shop BY Price</div>
        <div>Shop All</div>
        <div>

        <h4>Shop By Brand</h4>
        <ul>
        { this.state.brandData.map(el => {
          return (
            <li key={el._id} onClick= {this.filterBrand.bind(this,el.slug)}>
            {el.name}
            </li>
          )
        })
      }

      </ul>
      </div>
        <div>Shop By Color</div>
        <div>Shop By Stone</div>
      </div>

    )
  }
}
Sidebar.contextType = myContext;