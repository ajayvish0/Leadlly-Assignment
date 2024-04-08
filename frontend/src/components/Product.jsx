import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <h2 className="text-3xl font-bold mb-11 text-center ">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4">
            <h3 className="text-xl font-bold mb-2 text-limegreen">
              {product.title}
            </h3>
            <p className="text-gray-600">{product.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
