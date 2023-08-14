import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
function Cart() {
    // const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    const getCartList = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : []
    const order = () => {
        navigate('/payment')
    }
    var totalPrice = 0;
    for (let i=0; i < getCartList.length; i++ ) {
        totalPrice += getCartList[i].price
    }
    
    console.log(totalPrice)
  return (
    <>
    { window.location.href.includes('/cart') ? <Navbar /> : null}
    <div className="con-3">
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
                   { window.location.href.includes('/cart') ? <button onClick={order} id="login-page">ORDER NOW</button> : null}
                </div>
                </>
  )
}

export default Cart