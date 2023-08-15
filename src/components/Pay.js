import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from './Cart'
import { toast } from 'react-toastify'

function Pay() {
    const navigate = useNavigate()
    const payNow = ()  => {
        toast.success(`Payment Success ` , {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message'
        
        });
        localStorage.setItem('cartList', '')
        navigate('/')

    }
    return (
        <div className='payment-box'>
            <div className="con-1">
                <h1>Shopping Cart</h1>
                <h5> <a href="new.html">Homepage </a>/ <a href="">Clothing </a>/ <a href="">My Shopping Cart</a></h5>

            </div>
            <div className="big-con">
                <div className="con-2">
                    <div className="nav-2">
                        <div className="gola-a">
                            a
                        </div>
                        <h5>SHOPPING ADDRESS</h5>
                    </div>
                    <form>
                        <div className="form-1">
                            <div className="first">
                                <p>First Name*</p>
                                <input type="text" /></div>
                            <div className="last">
                                <p>Last Name*</p>
                                <input type="text" /></div>
                        </div>



                        <div className="form-2">
                            <div className="address">
                                <p>address*</p>
                                <input type="text" /></div>
                            <div className="apt">
                                <p>Apt,Suite*</p>
                                <input type="text" /></div>
                        </div>


                        <div className="form-3">
                            <div className="city">
                                <p>City*</p>
                                <input type="text" /></div>
                            <div className="country">
                                <p>Country*</p>
                                <select name="" id="">
                                    <option value="">United States</option>
                                    <option value="">United States</option>
                                    <option value="">United States</option>
                                    <option value="">United States</option>
                                    <option value="">United States</option>
                                </select></div>
                        </div>
                        <div className="number">
                            <p>Postal Code*</p>
                            <input type="number" /></div>


                        <div className="form-4">
                            <button  >Save And Deliver Here</button>

                            <input id="reset-btn" type="reset" />
                        </div>
                    </form>

                    <div className="nav-3">
                        <div className="gola-a">
                            b
                        </div>
                        <h5>PAYMENT METHOD</h5>
                    </div>
                </div>
        <Cart />
                {/* <div className="con-3">
                    <h4>Your Order</h4>

                    {getCartList ? getCartList.map((e) => {
                        return (
                            <div className="img-box">
                                <div className="image">
                                    <img src="a-1.jpg" alt="" width="100%" />
                                </div>
                                <div className="text">
                                <h5><b>{e.quantity}X</b></h5>
                                    <h5>{e.title}</h5>

                                    <h5>{e.price}</h5>
                                </div>
                            </div>
                        )
                    })
                : null }


                    <div className="total">
                        <h2>Total</h2>
                        <h2>${totalPrice}</h2>
                    </div>
                </div> */}
            </div>


            <div className="payment">
                <div className="card">
                    <div className="cc">
                        <p>Card Type  </p>
                        <select value="card type" id="card type">
                            <option value="">--select card type--</option>
                            <option value="visa">Visa</option>
                            <option value="master card">Master card</option>
                            <option value="rupay">Rupay</option>
                        </select>
                    </div>
                    <div className="aa">
                        <p>Card Number</p>
                        <input type="number" id="card nunber" name="card number" />
                    </div>
                </div>
                <div className="card">
                    <div className="cc">
                        <p> Expire date</p>
                        <input type="date" id="expire" name="expire" /></div>
                    <div className="aa">
                        <p> cvv</p> <input type="Password" id="cvv" name="cvv" /></div>
                </div>

                <div className="butt">
                    <button onClick={payNow}>Pay Now</button>
                    <button>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Pay