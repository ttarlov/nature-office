import React from 'react'
import { inject, observer } from 'mobx-react'
import IosSearch from 'react-ionicons/lib/IosSearch'
import GlobalStore from '../../store/GlobalStore'
import { Link } from 'react-router-dom'

const Search = inject('GlobalStore')(observer(() => {
  let searchInputValue

  const filterSearch = () => {
    GlobalStore.filteredSearch = GlobalStore.spots.filter(spot => {
      return spot.name.toLowerCase().includes(searchInputValue.toLowerCase())
    })
  }

  const updateSearchValue = (e) => {
    searchInputValue = e.target.value;
    searchInputValue
    ? filterSearch()
    : GlobalStore.filteredSearch = null;
  }

  const handleSubmit = (e) => {
    if (!GlobalStore.filteredSearch) {
      e.preventDefault()
    } else {
      searchInputValue = ''
    }
  }

  return (
    <section className="form-container">
      <form className="search-input-container">
        <input
          className="search-input"
          type="text"
          name="search"
          placeholder="Search by name"
          onChange={updateSearchValue}
          required
        />
        <Link
          to={'/searchResults/'}
          className="search-icon"
          onClick={handleSubmit}
        >
          <IosSearch fontSize="2rem"/>
        </Link>
      </form>
    </section>
  )
}))

export default Search
