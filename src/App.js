import React, { Component } from 'react' 
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import './App.css'


class BooksApp extends Component {
  state = {
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
