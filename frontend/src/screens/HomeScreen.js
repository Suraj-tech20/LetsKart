import React, { useEffect } from 'react';
// import data from '../data';
import Product from '../components/Products';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    // // Hooks to to show loading screeen
    // const [loading, setLoading] = useState(false);
    // //Hook for error in feching data from backend
    // const [error, setError] = useState(false);
    // // Hooks to fectch data from backend
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const fectData = async () => {
    //         try {
    //             setLoading(true);
    //             const { data } = await axios.get('/api/products');
    //             setLoading(false);
    //             setProducts(data);
    //         } catch (err) {
    //             setError(err.message);
    //             setLoading(false);
    //         }
    //     };
    //     fectData();
    // }, [])
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div>
            {loading ? <LoadingBox></LoadingBox> : error ? <MessageBox varient="danger">{error}</MessageBox> :
                (<div className="row center">
                    {products.map((product) => {
                        return (
                            <Product key={product._id} product={product}></Product>
                        )
                    })
                    }
                </div>)
            }
        </div>
    )
}

