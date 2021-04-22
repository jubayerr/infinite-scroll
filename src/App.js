import { useState } from 'react';
import './App.css';
import useBookSearch from './useBookSearch';

function App() {

  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  const {
    books,
    hasMore,
    loading,
    error
  } = useBookSearch(query, pageNumber)
  return (
    <div className="App">
      <input type="text" onChange={handleSearch} />
      {books.map(book => {
        return <div key={book}>{book}</div>
      })}
      <div>{loading && "...loading"}</div>
      <div>{error && "Error!"}</div>
    </div >
  );
}

export default App;
