import React, {useEffect, useState} from 'react'
import HomeTable from '../../components/HomeTable/HomeTable'
import './home.css'
import Axios from 'axios'
import Form from '../../components/Form/Form'
function Home() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {

    //-- methond 1
    // Axios.get('https://dummyjson.com/products').then((response) => {
    //   console.log(response.data.products)
    // }).catch((error) => console.log(error))

    productsData()
  }, [])

  //method 2 -- GET ALL CALL
  const productsData = async () => {
    try {
      const {data} = await Axios.get('https://dummyjson.com/products')
      setProducts(data.products)
    } catch (error) {
      console.log(error)
    }
  }

  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      {/* <HomeTable products={products} /> */}
      <button onClick={() =>setShowForm(!showForm)}>NEW</button>
      {showForm&&<Form />}
    </div>
  )
}

export default Home