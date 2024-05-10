import React from 'react'
import PropTypes from 'prop-types'

function CategoryList({categories, keyword, onKeyword}) {
    return (
        <div className="categories-list">
            {categories.map((category) => {
                const isSelected = category.toLowerCase() === keyword?.toLowerCase()
                return (
                    <button
                        key={category}
                        type="button"
                        className={`category-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => onKeyword(category)}
                    >
                        {`#${category}`}
                    </button>
                )
            })}
        </div>
    )
}

CategoryList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    keyword: PropTypes.string,
    onKeyword: PropTypes.func.isRequired
}

export default CategoryList
