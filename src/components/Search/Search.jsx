import React from 'react'
import { inject, observer } from 'mobx-react'
import IosSearch from 'react-ionicons/lib/IosSearch'
import GlobalStore from '../../store/GlobalStore'
import { Link } from 'react-router-dom'

const Search = inject('GlobalStore')(observer(() => {
  let searchInputValue

  const filterSearch = () => {
    GlobalStore.filteredSpots = GlobalStore.spots.filter(spot => {
      return spot.name.toLowerCase().includes(searchInputValue.toLowerCase())
    })
  }

  const updateSearchValue = (e) => {
    searchInputValue = e.target.value;
    searchInputValue
    ? filterSearch()
    : GlobalStore.filteredSpots = null;
  }

  const handleSubmit = (e) => {
    return (
      !GlobalStore.filteredSpots
      ? e.preventDefault()
      : console.log('should go to link')
    )
  }

  return (
    <form className="search-container">
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
  )
}))

export default Search
