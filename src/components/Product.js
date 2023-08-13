import {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from '../db/productList'



function Product() {
    let { productID } = useParams()
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()
    const title = products.filter((p)=> p.id === (productID))[0].name
    const totalPrice = products.filter((p)=> p.id === (productID))[0].price * quantity
    console.log('title', title)

    const getCartList  = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : []
    
    console.log('getCartList',getCartList)
    const cartObj = {
        quantity: quantity,
        title: title,
        price: totalPrice


    }
    const setCart = () => {
    getCartList.push(cartObj)
    const setCartList = localStorage.setItem('cartList', JSON.stringify(getCartList))
    console.log(setCartList)

    }

    return (
        <div>
            <div className="abhay-1">

                <div className="abhay-2">
                    <div className="abhay-box">
                        <img src={process.env.PUBLIC_URL + "images/" + "a-1.jpg"} alt="" width="85%" height="80%" />
                    </div>
                    <div className="color-box">
                        <div className="colors">
                            <img src={process.env.PUBLIC_URL + "images/" + "color-1.jpg"} alt="" width="100%" height="100%" />
                        </div>
                        <div className="colors">
                            <img src={process.env.PUBLIC_URL + "images/" + "color-2.jpg"} alt="" width="105%" height="100%" />
                        </div>
                        <div className="colors">
                            <img src={process.env.PUBLIC_URL + "images/" + "color-3.jpg"} alt="" width="105%" height="100%" />
                        </div>
                        <div className="colors">
                            <img src={process.env.PUBLIC_URL + "images/" + "color-4.jpg"} alt="" width="105%" height="100%" />
                        </div>

                    </div>
                </div>

                <div className="abhay-3">
                    <div className="border-1">
                        <h1>HyperX Cloud II </h1>
                        <h4>Gaming Headset for PC, PS5 / PS4. Includes 7.1 Virtual Surround Sound and <br /> USB Audio Control Box - Red (4P5M0AA)</h4>
                        <div className="icon-1">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>

                    <div className="border-2">
                        <h2>-23% ₹9,989</h2>
                        <h4>M.R.P.: ₹12,987</h4>
                    </div>
                    <div className="border-3">
                        <p>Inclusive of all taxes</p>
                        <p>EMI starts at ₹477. No Cost EMI available  <a href="">EMI options </a></p>
                    </div>
                    <div className="border-4">
                        <h3 id="color">Choose a Color</h3>
                        <div className="color-gola">
                            <div className="gola">

                            </div>
                            <div className="gola-2">

                            </div>

                        </div>

                    </div>

                    <div className="border-5">
                        <div className="add"> <input onChange={(e) => setQuantity(e.target.value)} type="number" /></div>

                        <div className="but-1">
                            <a ><button onClick={setCart}>Add to Cart</button></a>
                        </div>
                    </div>



                    <div className="last-border">
                        <h3>Free Delivery</h3>
                        <p>Enter your Postal order for Availablilty</p>
                    </div>

                    <div className="last-border">
                        <h3>Return Delivery</h3>
                        <p>Free 30days Delivery Return  <a href="">Details</a></p>
                    </div>
                </div>

            </div>


            <div className="abhay-4">
                <h1 id="product">
                    Products related to this item</h1>
                <div className="logitech-box">
                    <div className="logitech-box-2">
                        <img src={process.env.PUBLIC_URL + "images/" + "logitech.jpg"} alt="" width="105%" height="100%" />

                        <h4 id="logitech">Logitech G Pro X Gaming Wired Over Ear Headphones with Mic Blue Voice DTS…</h4>
                        <div className="icon-2">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <h2>
                            ₹13,995.00 </h2>
                    </div>

                    <div className="logitech-box-2">
                        <img src={process.env.PUBLIC_URL + "images/" + "hyperX.jpg"} alt="" width="105%" height="100%" />
                        <h4 id="hyperX">HyperX Cloud Stinger 2 Core Gaming Headset for Playstation - White (6H9B5AA)</h4>
                        <div className="icon-2">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <h2>₹3,490.00 </h2>
                    </div>

                    <div className="logitech-box-2">
                        <img src={process.env.PUBLIC_URL + "images/" + "microphone.jpg"} alt="" width="105%" height="100%" />
                        <h4 id="microphone">HyperX Solocast - Usb Condenser Gaming Unidirectional Microphone, For Pc,…</h4>
                        <div className="icon-2">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <h2>₹4,490.00 </h2>
                    </div>

                    <div className="logitech-box-2">
                        <img src={process.env.PUBLIC_URL + "images/" + "earphone.jpg"} alt="" width="105%" height="100%" />
                        <h4 id="earphone">Hyperx Cloud Earbuds Wired in Ear Gaming Earphones with Mic for Nintendo Switch and....</h4>
                        <div className="icon-2">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <h2>₹,490.00 </h2>
                    </div>

                </div>
                <h1 id="spe">Specifications</h1>
                <div className="details-box">

                    <div className="products">
                        <div className="line">
                            <p>Brand</p> <br />
                            <p>Manufacturer</p> <br />
                            <p id="name">Model Name</p><br />
                            <p id="year">Model Year</p><br />
                            <p>Item Weight</p><br />
                            <p>Connector Type</p><br />
                            <p id="material">Material</p><br />
                            <p>Cable feature</p><br />
                            <p>Batteries Included</p><br />
                            <p>Batteries Required</p><br />
                            <p>Number of items</p><br />
                            <p>Special Features</p><br />
                            <p id="item-no">Item model number</p> <br />
                            <p> Drivers</p>




                        </div>
                        <div className="line-2">
                            <p>HyperX</p><br />
                            <p>HyperX, HP Inc</p><br />
                            <p>HyperX Cloud Core – Gaming headset for PC, DTS Headpone:X, Spatial Audio</p><br />
                            <p>2022</p><br />
                            <p>408 g</p><br />
                            <p>wired</p><br />
                            <p>Aluminium</p><br />
                            <p>Detachable</p><br />
                            <p>NO</p><br />
                            <p>No</p><br />
                            <p>1</p><br />
                            <p>on-ear</p><br />
                            <p>4P4F2AA</p><br />
                            <p>53mm</p>

                        </div>

                    </div>
                    <div className="tow-box">
                        <div className="products-2">
                            <div className="line">
                                <p>Headphones form factor</p><br />
                                <p>Batteries</p> <br />
                                <p>Product Dimensions</p><br />
                                <p>Does it contain liquid?</p><br />
                                <p>Hardware Platform</p><br />
                            </div>
                            <div className="line-2">
                                <p>On Ear</p><br />
                                <p>1 Unknown batteries required.</p><br />
                                <p>14.7 x 20.4 x 9.6 cm; 408.23 Grams</p><br />
                                <p>No</p><br />
                                <p>	Gaming Console, PC, Smartphone</p>

                            </div>

                        </div>
                        <div className="divv">
                            <h1 id="warranty">Warranty
                            </h1>
                            <div className="divv-box">
                                <p>Domestic Warranty</p><br />
                                <p> Domestic Warranty</p><br />
                                <p>Warranty Service Type</p><br />
                                <p>Covered in Warranty</p><br />
                                <p>Not Covered in Warranty</p>
                            </div>
                            <div className="divv-box-2">
                                <p>2 Year</p><br />
                                <p>2 year manufacturer warranty</p><br />
                                <p>carry in</p><br />
                                <p>manufacturer defects</p><br />
                                <p>physically damage</p>


                            </div>
                        </div>
                    </div>


                </div>
                <div className="items">

                    <div className="details-box-1">
                        <img src={process.env.PUBLIC_URL + "images/" + "details-1.png"} alt="" width="100%" height="100%" />
                    </div>
                    <div className="details-box-2">
                        <h1>HyperX Signature Comfort</h1>
                        <h2>Feel the HyperX difference in the details like our signature memory foam, premium leatherette, weight distribution and clamping force. A more comfortable experience is achieved with the adjustment of these factors. This makes a huge difference during longer gaming sessions or whenever headset is being worn for long periods of time.</h2>
                    </div>

                </div>

                <div className="items">


                    <div className="details-box-3">
                        <h1>Immersive Audio</h1>
                        <h2>Hear the rich, impactful sounds of your games with clarity and precision. Specially-tuned 53mm drivers let you lose yourself in the game world or focus on important audio cues.</h2>
                    </div>
                    <div className="details-box-4">
                        <img src={process.env.PUBLIC_URL + "images/" + "details-2.png"} alt="" width="100%" height="100%" />
                    </div>
                </div>

                <div className="items">

                    <div className="details-box-5">
                        <img src={process.env.PUBLIC_URL + "images/" + "details-3.png"} alt="" width="100%" height="100%" />
                    </div>
                    <div className="details-box-6">
                        <h1>Virtual 7.1 Surround Sound</h1>
                        <h2>7.1 can be toggled on for improved positional audio and an expanded sense of space.</h2>
                    </div>

                </div>



                <div className="items">


                    <div className="details-box-7">
                        <h1>Immersive Audio</h1>
                        <h2>Hear the rich, impactful sounds of your games with clarity and precision. Specially-tuned 53mm drivers let you lose yourself in the game world or focus on important audio cues.</h2>
                    </div>
                    <div className="details-box-8">
                        <img src={process.env.PUBLIC_URL + "images/" + "details-4.png"} alt="" width="100%" height="100%" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
