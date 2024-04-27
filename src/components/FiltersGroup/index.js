import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderFiltersList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRating = () => changeRating(rating.ratingId)
      const ratingClassName =
        activeRatingId === rating.ratingId ? `rating active-rating` : `rating`

      return (
        <li className="item" key={rating.ratingId} onClick={onClickRating}>
          <img
            className="rating-image"
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderFiterRatings = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="list-items">{renderFiltersList()}</ul>
    </div>
  )

  const renderCategories = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategory = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? `category active-category`
        : `category`

      return (
        <li
          className="item"
          key={category.categoryId}
          onClick={onClickCategory}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="list-items">{renderCategories()}</ul>
    </>
  )

  const onSetSearchInput = event => {
    const {setSearchInput} = props
    if (event.key === 'Enter') {
      setSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          className="input"
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onSetSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {removeFilters} = props

  return (
    <div className="filters-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderFiterRatings()}
      <button className="filters-button" type="button" onClick={removeFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
