import React, { Component } from 'react'
import BookShelf from './BookShelf'

class MainPage extends React.Component {
	render() {
		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
            	shelf="currentlyReading"
            	shelfTitle="Currently Reading"
            	books={this.props.books}
            	moveShelf={this.props.moveShelf}
            />
            <BookShelf 
            	shelf="wantToRead"
            	shelfTitle="Want to Read"
            	books={this.props.books}
            	moveShelf={this.props.moveShelf}
            />
            <BookShelf 
            	shelf="read"
            	shelfTitle="Read"
            	books={this.props.books}
            	moveShelf={this.props.moveShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>

		);
	}
}

export default MainPage
