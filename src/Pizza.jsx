import { useEffect, useState } from "react"
import style from './Pizza.module.css'

export default function Pizza() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        const data = await response.json();
        setProducts(data.recipes);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    {products.map(product =>
                        <div className='col-lg-3 mt-3 mb-3'>
                            <div className= {style.item} >
                                <h3>{product.title.split(' ').slice(0,2).join(' ')}</h3>
                                <img src={product.image_url}/>
                                <h4>{product.social_rank}</h4>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div> 
        </>
    )
}

