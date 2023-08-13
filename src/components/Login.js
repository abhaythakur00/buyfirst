import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
// import Swiper bundle with all modules installed


// install Swiper modules


function Login() {

    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()
    const showToastMessage = () => {
        toast.success(`Login Success ! Welcome ${localStorage.getItem('name')}` , {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message'
        
        });
    };
    const login = () => {
            localStorage.setItem('name', name)
            localStorage.setItem('pass', password)
            showToastMessage()
            // setTimeout(window.location.href = '/', 6000);
            navigate('/')
            
            
    }
  return (
<div>
<div className="nav">

        <ul>
            <img 
            src={process.env.PUBLIC_URL + "images/" + "abhaY.jpg"} alt="" width="8%" height="5%"/>
           <div className="div_head"> 
         
        </div>
        <div className="button-1">
            <li id="home">
                <a href="/"> 
                <i className="fa-solid fa-house" style={{color:"#000000"}}></i> Home</a></li></div>
        </ul>

    </div>
         
       

    <div className="submit">
        <div className="login">Login</div>

      <div className="box-0">  
    <label for="text">Username :</label>
    <input type="Email" onChange={(e) => setname(e.target.value)} placeholder="Username"  id="text" name=" text"/><br/><br/>
    <label for="number">Password :</label>
        <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password...." id="password" name="pasword"/><br/><br/></div>   
    <div className="continue">
       <a><button onClick={login} id="login-page">Login</button></a></div>
    
    <p className="policy">By continue,you agree to Buyfirst<br/>
    Terms of use & policy.</p>
    <div className="buttt">
        <a href="/register"><button>Create Your Account</button></a> 
    </div>



    <div className="iconn-1">
        <div className="iconn-2"> <a href="https://www.facebook.com/profile.php?id=100038200869527&mibextid=9R9pXO"> <i className="fa-brands fa-facebook"></i></a>  </div>
        <div className="iconn-3"> <a href="https://instagram.com/abhay_thakur__00?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"><i className="fa-brands fa-instagram"></i></a> </div>
         <div className="iconn-4"> <a href=""><i className="fa-brands fa-twitter"></i></a> </div>
             <div className="iconn-5"> <a href=""><i className="fa-brands fa-linkedin"></i></a></div></div>
            
    
</div>
</div>
    );
}

export default Login;
