# MyReads Project

For this project, it was about creating bookself App that allow you to select and categorize books you have read, you are currently reading, or you want to read, by using React Code to complete the project.

## Before get started

1. clone this respository.
2. cd to directory which has this respository.
3. install all project dependencies with `npm install`. 
4. start the development server with `npm start`.
5. launch the site in your browser at http://localhost:3000.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Reference Resource:
  
* [Getting Started with React – An Overview and Walkthrough](https://www.taniarascia.com/getting-started-with-react/)
* [Study Jam 21/07 - FEND P7 - My Reads by Maeva NAP](https://www.youtube.com/watch?v=i6L2jLHV9j8)
* [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
* [Learn React - React Crash Course 2018 - React Tutorial with Examples](https://www.youtube.com/watch?v=Ke90Tje7VS0)
