import React from 'react'

let Book = (props) => {
	let showingThumbnail = props.book.imageLinks ? 
		props.book.imageLinks.thumbnail:"http://via.placeholder.com/128x193?text=No%20Cover";
	
	return (
		<div className="book">
    		<div className="book-top">
		        <div className="book-cover" 
		          	style={{ 
		          		width: 128, 
		          		height: 193, 
		          		backgroundImage: `url(${showingThumbnail})`}}
		        ></div>
		        <div className="book-shelf-changer">
		            <select 
		            	value={props.currentShelf}
		            	onChange={(event) => props.moveShelf(props.book, event.target.value)} 
		            >
		              	<option value="move" disabled>Move to...</option>
		              	<option value="currentlyReading">Currently Reading</option>
		              	<option value="wantToRead">Want to Read</option>
		              	<option value="read">Read</option>
		              	<option value="none">None</option>
		            </select>
		        </div>
		    </div>
		    <div className="book-title">{props.book.title}</div>
		    <div className="book-authors">{props.book.authors ? props.book.authors.join(", ") : ""}</div>
      	</div>	
  	);
}

export default Book