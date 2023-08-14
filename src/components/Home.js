import React from "react";
import Carousel from "./Carousel";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "./Navbar";
// import Swiper bundle with all modules installed


// install Swiper modules


function Home() {
  const navigate = useNavigate()
  const Username = localStorage.getItem('name')
  const logout = () => {
    localStorage.setItem('name', null)
    localStorage.setItem('pass', null)
    navigate('/login')
  }
  return (
    <div>
      
      <Navbar />
      <div className="container">
        <div className="con-1">
          <h1 id="mm">
            hopping And <br />
            Department Store.
          </h1>
          <p>
            Anyone can get dressed up and glamorous,but it is how <br />
            people dress in their days off that.
          </p>
          <div className="but">
            <a href="">
              <button>See All</button>
            </a>
          </div>
        </div>

        <div className="con-2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "10.jpg"}
            
            
            alt=""
            height="100%"
            width="95%"/>
        </div>
      </div>

      <div className="con-3">
        <div className="nav-2">
          <button id="shoes">Shoes</button>
          <button id="cap">Cap</button>
          <button>Watches</button>
          <button id="wo">Woman T-Shirt </button>
          <button id="men">Men's T-Shirt</button>
        </div>
      </div>
      <div className="box-1">
        <div className="img-box">
          <a href="/category/foot">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/" + "d.jpg"} alt="" width="100%" height="100%"/>
          </a>
        </div>

        <div className="img-box">
          <a href="/category/hats">
            {" "}
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/" + "e.jpg"}
              alt=""
              width="100%"
              height="100%"
            />
          </a>
        </div>

        <div className="img-box">
          <a href="/category/watches">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/" + "f.jpg"}
              alt=""
              width="100%"
              height="100%"
            />
          </a>
        </div>

        <div className="img-box">
          <a href="/category/women">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/" + "g.jpg"}
              alt=""
              width="100%"
              height="100%"
            />
          </a>
        </div>
        <div className="img-box">
          <a href="/category/men">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/" + "h.jpg"}
              alt=""
              width="100%"
              height="100%"
            />
          </a>
        </div>
      </div>
  <Carousel />
    
      <div className="con-4">
        <div className="navi">
          <h2>Similar Items You Might Like</h2>
        </div>
        <div className="img-a1">
          <a href="Produt">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/" + "a-1.jpg"}
              alt=""
              width="100%"
              height="100%"
            />
          </a>
          <h4>
            HyperX Cloud II – Gaming Headset for PC, PS5 / PS4. Includes 7.1
            Virtual Surround Sound and USB Audio Control Box - Red (4P5M0AA)
          </h4>

          <a href="payment.html">
            <button>Buy Now</button>
          </a>
        </div>

        <div className="img-a2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "a-2.jpg"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>
            Hp Pavilion X360 11Th Gen Intel Core I3 14 Inches Fhd Multitouch
            2-in-1 Laptop(8Gb Ram/512Gb Ssd/B&O/Windows 11 Home)
          </h4>
          <a href="payment.html">
            {" "}
            <button id="leptop">Buy Now</button>
          </a>
        </div>

        <div className="img-a3">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "a-3.png"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>LG Ultragear 69 cm IPS FHD, G-Sync Compatible, HDR 10, Gaming LCD Monitor</h4>
          <a href="payment.html">
            {" "}
            <button id="add">Buy Now</button>
          </a>
        </div>

        <div className="img-a4">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "a-4.webp"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>
            Realme narzo 60 5G (Mars Orange,8GB+128GB) 90Hz Super AMOLED Display
            | Ultra Premium Vegan Leather Design
          </h4>
          <a href="payment.html">
            {" "}
            <button>Buy Now</button>
          </a>
        </div>
      </div>

      <div className="con-5">
        <div className="navi">
          <h2>MEN'S CLOTHING</h2>
        </div>

        <div className="img-box-2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "b-1.jpg"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>SHIRTS</h4>
        </div>

        <div className="img-box-2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "b-2.jpg"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>T-SHIRT</h4>
        </div>

        <div className="img-box-2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "b-3.jpg"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>JEANS</h4>
        </div>

        <div className="img-box-2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "b-4.jpg"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>KURTAS</h4>
        </div>
        <div className="img-box-2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "b-5.jpg"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>SHORTS</h4>
        </div>
      </div>

      <div className="con-6">
        <div className="navi">
          <h2> MEN'S FOOTWEAR</h2>
        </div>

        <div className="img-box-2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "2.jpg"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>CASUAL SHOES</h4>
        </div>

        <div className="img-box-2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "2222.jpg"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>FORMAL SHOES</h4>
        </div>

        <div className="img-box-2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "222.jpg"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>SPORT SHOES</h4>
        </div>

        <div className="img-box-2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "sandal.jpg"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4> SANDALS</h4>
        </div>
        <div className="img-box-2">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "images/" + "slipers.jpg"}
            alt=""
            width="100%"
            height="100%"
          />
          <h4>SLIPPERS</h4>
        </div>
      </div>

      <div className="con-8">
        <div className="navi">
          <h2>Get Up To 70% Off</h2>
        </div>
        <div className="abhay">
          <div className="img-box-4">
            <div className="text">
              <h5>Save</h5>
              <h2>$100</h2>
              <h5>
                Explore Our Furniture & Home <br />
                Furnishing Range
              </h5>
            </div>
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/" + "20.jpg"}
              alt=""
              width="100%"
            />
          </div>

          <div className="img-box-5">
            <div className="text">
              <h5>Save</h5>
              <h2>$100</h2>
              <h5>
                Explore Our Furniture & Home <br />
                Furnishing Range
              </h5>
            </div>
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/" + "combo.jpg"}
              alt=""
              width="100%"
            />
          </div>

          <div className="img-box-6">
            <div className="text">
              <h5>Save</h5>
              <h2>$100</h2>
              <h5>
                Explore Our Furniture & Home <br />
                Furnishing Range
              </h5>
            </div>
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/" + "samsung.jpg"}
              alt=""
              width="100%"
            />
          </div>

          <div className="img-box-7">
            <div className="text">
              <h5>Save</h5>
              <h2>$100</h2>
              <h5>
                Explore Our Furniture & Home <br />
                Furnishing Range
              </h5>
            </div>
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/" + "watch-2.jpeg"}
              alt=""
              width="100%"
            />
          </div>
        </div>
      </div>

      <footer>
        <div className="con">
          <div className="con-10">
            <p>
              Subscribe our website to get
              <br />
              updates about our services
            </p>

            <input type="text" placeholder="Email Address" />
            <br />
            <button id="bit">
              <p>Subscribe</p>
            </button>
          </div>

          <div className="boxing">
            <h3>Quick Links</h3>
            <ul>
              <li>
                {" "}
                <a href="">About</a>
              </li>
              <li>
                {" "}
                <a href="">Offers & Discounts</a>
              </li>
              <li>
                {" "}
                <a href="">Get Coupon</a>
              </li>
              <li>
                {" "}
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="boxing">
            <h3>New Products</h3>
            <ul>
              <li>
                {" "}
                <a href="">Men Cloth</a>
              </li>
              <li>
                {" "}
                <a href="">Fashion Accessories</a>
              </li>
              <li>
                {" "}
                <a href="">Man Accessories</a>
              </li>
              <li>
                {" "}
                <a href="">Rubber made Toys</a>
              </li>
            </ul>
          </div>

          <div className="boxing">
            <h3>Support</h3>
            <ul>
              <li>
                {" "}
                <a href="">Frequently Asked Questions</a>
              </li>
              <li>
                {" "}
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                {" "}
                <a href="">Privacy Policy</a>
              </li>
              <li>
                {" "}
                <a href="">Report a Payment Issue</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="last">
          {" "}
          <p>
            Copyright @2023 All rights reserved | The website is made with
            buyfirst
          </p>
          <div class="icon-1">
   <div class="icon-2"> <a href="https://www.facebook.com/profile.php?id=100038200869527&mibextid=9R9pXO"> <i class="fa-brands fa-facebook"></i></a>  </div>
   <div class="icon-3"> <a href="https://instagram.com/abhay_thakur__00?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"><i class="fa-brands fa-instagram"></i></a> </div>
    <div class="icon-4"> <a href=""><i class="fa-brands fa-twitter"></i></a> </div>
        <div class="icon-5"> <a href=""><i class="fa-brands fa-linkedin"></i></a></div></div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
