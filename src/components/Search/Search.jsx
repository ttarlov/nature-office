import React from 'react'
import { inject, observer } from 'mobx-react'
import IosSearch from 'react-ionicons/lib/IosSearch'

const Search = inject('GlobalStore')(observer(() => {
  return (
    <section className="search-container">
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Search"
      />
      <button className="search-icon">
        <IosSearch
          fontSize="2rem"
        />
      </button>
    </section>
  )
}))

export default Search
