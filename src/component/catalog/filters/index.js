import React, { Component } from 'react'
import {myContext} from '../context';



const myDemo = () => {
  return (
    <div>
    <myContext.Consumer>
      {value => <div>myDemo => {value.filterValue}</div>}
    </myContext.Consumer>
      </div>
  )
}


export default class Filters extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    let value = this.context;
    console.log(value,'value888')
    return (

      <div id="filters">{value.filterValue}
        <div>
       {myDemo()}
          <span>Grid 1</span>
          <span>Grid 2</span>
          <span>Grid 3</span>
        </div>
        <div>Add to wishlist </div>
        <div>Sort </div>
        <div>Pagination</div>
      </div>

    )
  }
}


Filters.contextType = myContext;