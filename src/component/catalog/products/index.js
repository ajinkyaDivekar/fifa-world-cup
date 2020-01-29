import React, { Component } from 'react'

export default class Products extends Component {
  state = { data: [] };

 componentDidMount() {
  this.getData();
}

async getData() {
  let {brandFilter} = this.props;
  console.log('brandFilter', brandFilter)
  brandFilter = brandFilter && 'brands[0]=' + brandFilter;
  const response = await fetch(`https://opt-showcase-api-qa.optcentral.com/products?brand_ids=3,33,46,50,112,145,370,463,581,708,1119,1444,1797,1801,1809,1811,2086,2158,3512,3513,3522,3526,3528,3530&categories=earrings&limit=24&page=1&retailerId=143&showcase=OOO&sort=pricing.retail;desc&status=Active&${brandFilter}`);
  const json = await response.json();
  this.setState({ data: json.data });
}

static getDerivedStateFromProps(nextProps, prevState) {
  console.log(nextProps, prevState,'getDerivedStateFromProps');
  // this.getData();
  return true
}

componentDidUpdate(prevProps, prevState) {
  console.log(prevProps, prevState,'componentDidUpdate', this.props);
  if(prevProps.brandFilter != this.props.brandFilter) {
    this.getData()
  }

  return false;
}

  render() {
    return (
      <div id="products">
      <h1>Products</h1>
        <ul>
          {this.state.data.map(el => (
            <li key={el.id}>
              <div>
                <a href="#">
                  <img src={el.images[0]}/>
                </a><br/>
                {el.brand.name}: {el.sku}
              </div>
            </li>
          ))}

          {!this.state.data.length && 'Products not Found!!!'}
        </ul>
      </div>
    )
  }
}
