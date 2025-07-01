import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { x } = useParams();
  const [Product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${x}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <img alt="product" src={Product.thumbnail} />
        <h2>{Product.title}</h2>
        <p>{Product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
