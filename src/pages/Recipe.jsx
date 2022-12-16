import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";

const Recipe = () => {
  const { id } = useParams();
  const [resipe, setResipe] = useState([]);
 
  const  navigate = useNavigate()

  useEffect(() => {
    getMealById(id).then((data) => setResipe(data.meals[0]));
  }, []);

  return (
    <div className="resipe">
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>GO Back </button>
      <div className="d-flex justify-content-around align-items-center">
        <img src={resipe.strMealThumb} alt={resipe.strMeal} />
        <div className="resipe_content">
          <h3 className="my-3 mt-5">Name: {resipe.strMeal}</h3>
          <h5>Category: {resipe.strCategory}</h5>
          <h5>Area: {resipe.strArea}</h5>
          <p>
            <b>Instruction:</b> <br />
            {resipe.strInstructions}
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center flex-wrap justify-content-around">
        <table className="table table-hover mt-5">
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(resipe).map((key) => {
              if (key.includes("Ingredient") && resipe[key]) {
                return (
                  <tr>
                    <td>{resipe[key]}</td>
                    <td>{resipe[`strMeasure${key.slice(13)}`]}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        {resipe.strYoutube ? (
          <iframe
            className="mt-5"
            width="450"
            height="300"
            src={
              `https://www.youtube.com/embed/` + resipe.strYoutube.slice(-11)
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : null}
      </div>
    </div>
  );
};

export default Recipe;
