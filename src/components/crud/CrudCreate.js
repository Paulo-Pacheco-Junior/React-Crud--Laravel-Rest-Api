import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CrudCreate() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title:'',
        url:'',
        price:'',
        description:''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        PostProducts();
        navigate("/products");
    }

    const PostProducts = async() => {
        const dados = {
            title:formData.title,
            url:formData.url,
            price:formData.price,
            description:formData.description
        }

        const res = await axios.post('http://127.0.0.1:8000/api/products', dados, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res.data)
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Title:
                    </label>

                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Url:
                    </label>

                    <input
                        type="text"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Price:
                    </label>

                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">       
                    <label className="block text-sm font-medium text-gray-600">
                        Description:
                    </label>

                    <textarea
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <button
                    type="submit"
                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300
                    font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                    Registrar Produto
                </button>
                <Link to="/products">
                    <button
                        className="ml-6 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300
                        font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >    
                        Voltar
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default CrudCreate;
