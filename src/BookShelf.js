import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends React.Component {
	render() {
		return (
			<div>
			<div className="bookshelf">
	      <h2 className="bookshelf-title">Currently Reading</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">
	          <li>
	          	<Book />
	          </li>
	        </ol>
	      </div>
	    </div>
	    
	    <div className="bookshelf">
	      <h2 className="bookshelf-title">Want to Read</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">
	          <li>
	  					<Book />
	          </li>
	        </ol>
	      </div>
	    </div>

	    <div className="bookshelf">
	      <h2 className="bookshelf-title">Read</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">
	          <li>
	           	<Book />
	          </li>
	        </ol>
	      </div>
	    </div>
	    </div>
		);
	}
}


export default BookShelf
