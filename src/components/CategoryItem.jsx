import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({strCategory, strCategoryThumb
, strCategoryDescription}) => {
  return (
    <div className="card" style={{"width": "18rem"}}>
      <img src={strCategoryThumb} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{strCategory}</h5>
        <p className="card-text">
         {strCategoryDescription}
        </p>
        <Link to={`/category/${strCategory}`} className="btn btn-secondary">
          Watch Category
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
