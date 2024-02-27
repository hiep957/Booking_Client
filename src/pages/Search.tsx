
import React from 'react'
import { useSearchContext } from '../contexts/SearchContext'

function Search() {
    const search = useSearchContext();
    console.log(search)
  return (
    <div>Search</div>
  )
}

export default Search