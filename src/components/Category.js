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
                            <a href=""><img loading="lazy" src={`/images/` + p.image} alt="" width="100%" height="100%" /></a>
                            <h4>ASIAN <br />
                                {p.name}</h4>
                            <h2>₹{p.price}</h2>
                            <h5>M.R.P: <s>₹{p.price + 200}</s></h5>
                            <Link to={`/product/${p.id}`}>
                                <button onClick={() => {
                                    setBuy({
                                        name: p.name,
                                        price: p.price,
                                        image: p.image
                                    }); setCount(count + 1)
                                }}>View Product</button>
                            </Link>


                        </div>
                    )
                })

                }
                <div className="img-box-a1">
                    <a href="page.html"><img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "asian.jpg"} alt="" width="100%" height="100%" /></a>
                    <h4>ASIAN <br />
                        Men's TARZAN-03 Casual White Sneaker High Neck Shoes for Men I </h4>
                    <h2>₹599 </h2>
                    <h5>M.R.P: <s>₹899</s></h5>

                    <a href="payment.html"><button>Buy Now</button></a>

                </div>



                <div className="img-box-a2">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "campus-1.jpg"} alt="" width="100%" height="100%" />
                    <h4>Mike (N) Men's Running Shoes</h4>
                    <h2 id="price">₹1,047 </h2>
                    <h5>M.R.P: <s>₹1,699</s></h5>


                    <a href="payment.html"> <button id="leptop">Buy Now</button></a>
                </div>


                <div className="img-box-a3">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "puma-1.webp"} alt="" width="100%" height="100%" />
                    <h4>Unisex-Adult X-ray 2 Square Sneakers Sneaker</h4>
                    <h2 id="price-1">₹2,309 </h2>
                    <h5> M.R.P: <s>₹6,999</s></h5>

                    <a href="payment.html"> <button id="add">Buy Now</button></a>
                </div>

                <div className="img-box-a4">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "bata-1.jpg"} alt="" width="100%" height="100%" />
                    <h4>BATA <br />
                        Mens Boss-ace Uniform <br />Dress Shoe </h4>
                    <h2 id="price-2">₹699 </h2>
                    <h5> M.R.P: <s>₹999</s></h5>
                    <a href="payment.html"> <button>Buy Now</button></a>
                </div>
            </div>

            <div className="con-4">
                <div className="img-box-a1">
                    <a href="page.html"><img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "asian.jpg"} alt="" width="100%" height="100%" /></a>
                    <h4>ASIAN <br />
                        Men's TARZAN-03 Casual White Sneaker High Neck Shoes for Men I </h4>
                    <h2>₹599 </h2>
                    <h5>M.R.P: <s>₹899</s></h5>

                    <a href="payment.html"><button>Buy Now</button></a>

                </div>



                <div className="img-box-a2">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "campus-1.jpg"} alt="" width="100%" height="100%" />
                    <h4>Mike (N) Men's Running Shoes</h4>
                    <h2 id="price">₹1,047 </h2>
                    <h5>M.R.P: <s>₹1,699</s></h5>


                    <a href="payment.html"> <button id="leptop">Buy Now</button></a>
                </div>


                <div className="img-box-a3">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "puma-1.webp"} alt="" width="100%" height="100%" />
                    <h4>Unisex-Adult X-ray 2 Square Sneakers Sneaker</h4>
                    <h2 id="price-1">₹2,309 </h2>
                    <h5> M.R.P: <s>₹6,999</s></h5>

                    <a href="payment.html"> <button id="add">Buy Now</button></a>
                </div>

                <div className="img-box-a4">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "bata-1.jpg"} alt="" width="100%" height="100%" />
                    <h4>BATA <br />
                        Mens Boss-ace Uniform <br />Dress Shoe </h4>
                    <h2 id="price-2">₹699 </h2>
                    <h5> M.R.P: <s>₹999</s></h5>
                    <a href="payment.html"> <button>Buy Now</button></a>
                </div>
            </div>

            <div className="con-4">
                <div className="navi">
                    <h2>Sport Shoes</h2>
                </div>
                <div className="img-box-a1">
                    <a href="page.html"><img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "asian.jpg"} alt="" width="100%" height="100%" /></a>
                    <h4>ASIAN <br />
                        Men's TARZAN-03 Casual White Sneaker High Neck Shoes for Men I </h4>
                    <h2>₹599 </h2>
                    <h5>M.R.P: <s>₹899</s></h5>

                    <a href="payment.html"><button>Buy Now</button></a>

                </div>



                <div className="img-box-a2">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "campus-1.jpg"} alt="" width="100%" height="100%" />
                    <h4>Mike (N) Men's Running Shoes</h4>
                    <h2 id="price">₹1,047 </h2>
                    <h5>M.R.P: <s>₹1,699</s></h5>


                    <a href="payment.html"> <button id="leptop">Buy Now</button></a>
                </div>


                <div className="img-box-a3">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "puma-1.webp"} alt="" width="100%" height="100%" />
                    <h4>Unisex-Adult X-ray 2 Square Sneakers Sneaker</h4>
                    <h2 id="price-1">₹2,309 </h2>
                    <h5> M.R.P: <s>₹6,999</s></h5>

                    <a href="payment.html"> <button id="add">Buy Now</button></a>
                </div>

                <div className="img-box-a4">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "bata-1.jpg"} alt="" width="100%" height="100%" />
                    <h4>BATA <br />
                        Mens Boss-ace Uniform <br />Dress Shoe </h4>
                    <h2 id="price-2">₹699 </h2>
                    <h5> M.R.P: <s>₹999</s></h5>
                    <a href="payment.html"> <button>Buy Now</button></a>
                </div>
            </div>


            <div className="con-4">
                <div className="navi">
                    <h2>Similar Items You Might Like</h2>
                </div>
                <div className="img-box-a1">
                    <a href="page.html"><img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "asian.jpg"} alt="" width="100%" height="100%" /></a>
                    <h4>ASIAN <br />
                        Men's TARZAN-03 Casual White Sneaker High Neck Shoes for Men I </h4>
                    <h2>₹599 </h2>
                    <h5>M.R.P: <s>₹899</s></h5>

                    <a href="payment.html"><button>Buy Now</button></a>

                </div>



                <div className="img-box-a2">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "campus-1.jpg"} alt="" width="100%" height="100%" />
                    <h4>Mike (N) Men's Running Shoes</h4>
                    <h2 id="price">₹1,047 </h2>
                    <h5>M.R.P: <s>₹1,699</s></h5>


                    <a href="payment.html"> <button id="leptop">Buy Now</button></a>
                </div>


                <div className="img-box-a3">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "puma-1.webp"} alt="" width="100%" height="100%" />
                    <h4>Unisex-Adult X-ray 2 Square Sneakers Sneaker</h4>
                    <h2 id="price-1">₹2,309 </h2>
                    <h5> M.R.P: <s>₹6,999</s></h5>

                    <a href="payment.html"> <button id="add">Buy Now</button></a>
                </div>

                <div className="img-box-a4">
                    <img loading="lazy" src={process.env.PUBLIC_URL + "images/" + "bata-1.jpg"} alt="" width="100%" height="100%" />
                    <h4>BATA <br />
                        Mens Boss-ace Uniform <br />Dress Shoe </h4>
                    <h2 id="price-2">₹699 </h2>
                    <h5> M.R.P: <s>₹999</s></h5>
                    <a href="payment.html"> <button>Buy Now</button></a>
                </div>
            </div>
        </div>
    );
}

export default Category;