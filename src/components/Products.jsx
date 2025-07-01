import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Products.css'

function ProductsList() {

    const [Products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>setProducts(res.data.products))
        .catch((error)=>console.log(error))
    },[])

    return (
        <div className="products">
            {Products.map((product)=> (
                <div key={product.id}>
                    <img alt="product" src={product.thumbnail} />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <Link to={`${product.id}`}>Read more</Link>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}

export default ProductsList