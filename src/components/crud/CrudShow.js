import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CrudShow() {
    const {id} = useParams();
    console.log(id);
    const[product, setProduct] = useState([]);

    useEffect(function() {
      async function getProducts() {
        const res = await axios.get(`http://127.0.0.1:8000/api/products/`+id);
        const data = await res.data.data;
        setProduct(data);
      }
      getProducts();
    }, [id]);
    
    return (
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Title</th>
                    <th className="py-2 px-4 border-b">Url</th>
                    <th className="py-2 px-4 border-b">Price</th>
                    <th className="py-2 px-4 border-b">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-2 px-4 border-b">{product.title}</td>
                    <td className="py-2 px-4 border-b">{product.url}</td>
                    <td className="py-2 px-4 border-b">{product.price}</td>
                    <td className="py-2 px-4 border-b">{product.description}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default CrudShow;
