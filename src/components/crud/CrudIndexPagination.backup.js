import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { useNavigate, useParams } from "react-router-dom";

function CrudIndex() {
    //const navigate = useNavigate();
    //const { page } = useParams();
    const [products, setProducts] = useState([]);
    //const [currentPage, setCurrentPage] = useState(page ? parseInt(page, 10) : 1);
    //const [itemsPerPage, setItemsPerPage] = useState(20);
    //const [hasMoreProducts, setHasMoreProducts] = useState(true);

    useEffect(function() {
      async function getProducts() {
        const res = await axios.get(`http://127.0.0.1:8000/api/products`); 
        //,{
        //     params: {
        //         page: currentPage,
        //         per_page: itemsPerPage,
        //     },
        // }
        //);
        const data = res.data.data;
        setProducts(data);
        
        // if (data.length > 0) {
        //     setHasMoreProducts(data.length === itemsPerPage);
        //   } else {
        //     setHasMoreProducts(false);
        // }
      }
      getProducts();
    }, []);//[currentPage, itemsPerPage, hasMoreProducts]);

    // const handlePrevPage = () => {
    //     if (currentPage > 1) {
    //       setCurrentPage(currentPage - 1);
    //       navigate(`/products?page=${currentPage - 1}`);
    //     }
    // };

    // const handleNextPage = () => {
    //     if (hasMoreProducts) {
    //       setCurrentPage(currentPage + 1);
    //       navigate(`/products?page=${currentPage + 1}`);
    //     }
    // };

    const handleDelete = async(id) => {
        await axios.delete(`http://127.0.0.1:8000/api/products/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const filteredProducts = products.filter(product => product.id !== id);
        setProducts(filteredProducts);
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Link to="/">
                <button
                  className="ml-10 mb-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200
                  dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center"
                >    
                  Veja Seu Plano - 07 Dias de Teste Gratuito
                </button>
            </Link>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-base text-gray-900 dark:text-white">
                            Nome do Produto
                        </th>
                        <th scope="col" className="px-6 py-3 text-base text-gray-900 dark:text-white">
                            Url
                        </th>
                        <th scope="col" className="px-6 py-3 text-base text-gray-900 dark:text-white">
                            Preço
                        </th>
                        <th scope="col" className="px-6 py-3 text-base text-gray-900 dark:text-white">
                            Descrição
                        </th>
                        <th scope="col" colSpan={2} className="px-6 py-3">
                            <Link to={"/products/create"} type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Adicionar</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.title}
                            </th>
                            <td className="px-6 py-4">
                                {product.url}
                            </td>
                            <td className="px-6 py-4">
                                {product.price}
                            </td>
                            <td className="px-6 py-4">
                                {product.description}
                            </td>
                            <td className="px-1 text-right">
                                <Link to={`/products/edit/${product.id}`}>
                                    <button
                                        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 
                                            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                                            dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                    >
                                            Editar
                                    </button>
                                </Link>
                            </td>
                            <td className="px-1 text-right">
                                <button
                                    onClick={() => handleDelete(product.id)}
                                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 
                                        focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                                        dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                >
                                        Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <nav className="mx-auto w-full max-w-sm p-4" aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm">
                  <li>
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Página Anterior
                    </button>                   
                  </li>
                  <li>
                    <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Página {currentPage}</span>
                  </li>
                  <li>
                    <button
                        onClick={handleNextPage}
                        disabled={!hasMoreProducts}
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Próxima Página
                    </button>  
                  </li>
                </ul>
            </nav> */}
        </div>
    );
}

export default CrudIndex;