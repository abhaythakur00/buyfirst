import { useEffect, useState } from "react";
import { products } from '../db/productList'
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";


function Category() {
    let { categoryID } = useParams()
    const [count, setCount] = useState(0)
    const [buy, setBuy] = useState({
        name: "",
        price: 0,
        image: ""
    })
    // useEffect(() => {



    //   return () => {

    //   }
    // }, [])

    console.log(buy, count)

    return (

        <div>
            <Navbar />
            <div className="con-4">
                {products.filter((c) => c.category === categoryID).map(p => {
                    return (
                        <div className="img-box-a1">
                            <a href=""><img loading="lazy" src={`/images/` + p.images[0].name} alt="" width="100%" height="100%" /></a>
                            <h4>ASIAN <br />
                                {p.name}</h4>
                            <h2>₹{p.price}</h2>
                            <h5>M.R.P: <s>₹{p.price + 200}</s></h5>
                            <Link to={`/product/${p.id}`}>
                                <button onClick={() => {
                                    setBuy({
                                        name: p.name,
                                        price: p.price,
                                        image: p.images[0].name
                                    }); setCount(count + 1)
                                }}>View Product</button>
                            </Link>


                        </div>
                    )
                })

                }
               
            </div>

           
        </div>
    );
}

export default Category;