import React from 'react';
import axios from 'axios';

// export default function AsyncAwait() {
//   return (
//     <div>
//       AsyncAwait
//     </div>
//   )
// }

class AsyncAwait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      theme: 'default',
      query: '',
      errMessage: '',
      totalItems: 0,
    };
    this.onSearch = this.onSearch.bind(this);
  }
  async fetchData() {
    let { query } = this.state;
    var axiosInstance = axios.create({
      baseURL: 'https://www.googleapis.com/books/v1/volumes',
    });
    if (query !== '') {
      let data = [];
      let errorMsg = '';
      try {
        let response = await axiosInstance.get(`?q=${query}&maxResults=10`);
        console.log('response', response);
        data = response.data.items || [];

        // let totalItems = response.data.totalItems;
        // let filterArr = filter(data.items, o => o.volumeInfo.title);
      } catch (err) {
        console.log('err', err.message);
        errorMsg = err.message;
      }
      this.setState({
        books: data,
        errMessage: errorMsg,
      });
    }
  }
  onSearch(e) {
    e.preventDefault();
    let { query } = this.state;
    if (query !== '') {
      this.fetchData();
    } else {
      this.setState({
        books: [],
      });
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  render() {
    let { query, books, errMessage } = this.state;
    return (
      <div className="main-container">
        <form className="books-con">
          <span className="text-center">
            <h3>Using Async/Await With Axios</h3>
          </span>
          <div className="top-con form-group col-md-4">
            <input
              className="form-control form-control-sm search-books"
              type="text"
              value={query}
              placeholder="Enter Keywords for Books search"
              onChange={event => this.setState({ query: event.target.value })}
            />
          </div>
          <div className="form-group col-md-12">
            <input
              type="button"
              className="btn btn-primary"
              onClick={this.onSearch}
              value="Search"
            />
          </div>
        </form>
          {(books && (
            <ul className="default">
              {books.map((item, id) => (
                <li key={id}>
                  <a href={item.volumeInfo.infoLink} target="_blank">
                    {item.volumeInfo.title}
                  </a>

                </li>
              ))}
            </ul>
          )) || <p className="alert-danger">{errMessage}</p>}
          {books && <p> Total Items : {(books && books.length) || 0}</p>}
      </div>
    );
  }
}
export default AsyncAwait;
