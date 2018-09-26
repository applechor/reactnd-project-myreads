import React, { Component } from 'react' 
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import './App.css'


class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({books: books})
    })
  } 

  moveShelf = (book, shelf) => {
    //console.log(`moved to ${shelf}`);
    BooksAPI.update(book, shelf)
      .then(() => BooksAPI.getAll())
      .then(books => this.setState({books}))
      .catch(error => console.log(error))
      //console.log(this.state.books);
  }
  
  render() {
    //console.log(this.state.books)
    return (
      <div className="app">
        <Route 
          exact path="/" 
          render={() => (
            <MainPage 
              books = {this.state.books}
              moveShelf={this.moveShelf}
            />
          )}
        />
        <Route 
          path="/search"
          render={() => (
            <SearchPage 
              books = {this.state.books}
              moveShelf={this.moveShelf}
            />
          )}  
        />
      </div>
    );
  }
}

export default BooksApp
