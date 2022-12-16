import React from 'react'
import MealItem from './CategoryItem'

const CategoryList = ({categories}) => {
    console.log(categories)
  return (
    <div className='CategoryList'>
        {
            categories.map(meal => {
                return (
                    <MealItem key={meal.idCategory} {...meal} />
                )
            })
        }
    </div>
  )
}

export default CategoryList