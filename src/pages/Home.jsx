import React, {useEffect, useState}  from 'react'  
import { getAllCategories } from '../api'
import Loader from '../components/Loader'
import CategoryList from '../components/CategoryList'

const Home = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getAllCategories().then(data => {
      setCategories(data.categories)
    }) 
  }, [])
  return (
    <div>
      {
        !categories.length ? (<Loader/>):
        <CategoryList categories={categories} />
      }
    </div>
  )
}

export default Home