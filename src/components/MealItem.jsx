import React from 'react'
import { Link } from 'react-router-dom'

const MealItem = ({idMeal, strMealThumb, strMeal}) => {
  return (
    <div className="card" style={{"width": "18rem"}}>
      <img src={strMealThumb} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{strMeal}</h5>
       
        <Link to={`/meal/${idMeal}`} className="btn btn-secondary">
          Watch More
        </Link>
      </div>
    </div>
  )
}

export default MealItem