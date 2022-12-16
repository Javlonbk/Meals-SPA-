import React, { useEffect , useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getFilterCategory } from '../api';
import Loader from '../components/Loader'
import MealList from '../components/MealList';

const Category = () => {

    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getFilterCategory(name).then(data => setMeals(data.meals))
    }, [name])
  return (
    <div className='Category'>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>GO Back </button>
        {
            !meals.length ? (<Loader/>) :
            <MealList meals={meals} />
        }
    </div>
  )
}

export default Category