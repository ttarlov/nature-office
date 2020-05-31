import React from 'react'
import { inject, observer } from 'mobx-react'

const Search = inject('GlobalStore')(observer(() => {
  return (
    <section>
      <input
        type="text"
        name="search"
        placeholder="Search"
        required
      />
    </section>
  )
}))

export default Search
