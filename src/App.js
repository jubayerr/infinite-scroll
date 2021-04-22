import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import useBookSearch from './useBookSearch';

function App() {

  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    books,
    hasMore,
    loading,
    error
  } = useBookSearch(query, pageNumber)

  const observer = useRef()

  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPageNumber(1)
  }


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3 pb-5">
            <h2 className="py-4 text-center">Infinite Scrolling</h2>
            <div className="form-group">
              <input className="form-control" type="text" value={query} onChange={handleSearch} placeholder="Search..." />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-3">
            {books.map((book, index) => {
              if (books.length === index + 1) {
                return <div ref={lastBookElementRef} key={book}><p className="lead">{book}</p></div>
              } else {
                return <div key={book}><p className="lead">{book}</p></div>
              }
            })}
            <div className="text-success text-center"><p className="lead">{loading && "...loading"}</p></div>
            <div className="text-danger text-center">{error && "Error!"}</div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
