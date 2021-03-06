import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
	state = {
		query: '',
		searchedResults: []
	}

	updateQuery = (query) => {
  		this.setState({query: query})
  		this.showingBooks(query)
	}

	showingBooks = (query) => {
		if(query) {
			BooksAPI.search(query)
				.then((searchedResults) => {
					if(searchedResults.error) {
						this.setState({searchedResults: []})
					} else {
						this.setState({searchedResults})
					}
				})
		} else {
			this.setState({searchedResults: []})
		} 
	}

	render() {
		return (
			<div className="search-books">
        		<div className="search-books-bar">
			        <Link 
			          	to="/"
			          	className="close-search" 
			        >Close</Link>
          
					<div className="search-books-input-wrapper">
		            {/*
		              NOTES: The search from BooksAPI is limited to a particular set of search terms.
		              You can find these search terms here:
		              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

		              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
		              you don't find a specific author or title. Every search is limited by search terms.
		            */}
		            	<DebounceInput 
			            	minLength={2}
			          		debounceTimeout={300}
			            	type="text" 
			            	placeholder="Search by title or author"
			            	value={this.state.query}
			            	onChange={(event) => this.updateQuery(event.target.value)}
		            	/>
		          	</div>							
        		</div>

		        <div className="search-books-results">
		          	<ol className="books-grid">
			          	{this.state.searchedResults
			          		.map((searchedResult) => {
			          			let shelf = 'none'

				          		this.props.books
				          			.map((book) => (
				          				book.id === searchedResult.id ? 
				          				shelf = book.shelf : ""
				          			))
				          		return (
									<li key={searchedResult.id}> 
										<Book
						        			book={searchedResult}
						        			moveShelf={this.props.moveShelf}
						        			currentShelf={shelf}
							        	/>
					          		</li>
			          			)
			          		})
			          	}
		          	</ol>
		        </div>
		    </div>
    	);
	}
}

export default SearchPage