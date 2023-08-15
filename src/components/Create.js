import {useState} from "react";
import { useNavigate } from "react-router-dom";




function Create() {
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()
    const register = () => {
            localStorage.setItem('name', name)
            localStorage.setItem('pass', password)
            navigate('/')
            
    }
    return (
        <div>
            <div className="nav">

                <ul>

                    <img src="abhaY.jpg" alt="" width="8%" height="5%" />
                    <div className="div_head">
                    </div>
                    <div className="create-but-1">
                        <li id="home"><a href="/"> <i className="fa-solid fa-house" style={{ color: "#000000" }}></i> Home</a></li></div>
                </ul>

            </div>




            <div className="submit">

                <form className="submitForm" action="action page.php" />
                <div className="login">Create Your Account</div>

                <div className="box-0">
                    <label for="name">Name : </label>
                    <input onChange={(e) => setname(e.target.value)} type="text" placeholder="Fist and last name" id="fist and last name" name="Fist and last name " /><br /><br />
                    <label for="Number">Mobile number: </label>
                    <input className="Number" type="Number" placeholder="Mobile number" id="Number" name="Number" /><br /><br />
                    <label for="lname">Password : </label>
                    <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" id="lname" name="lname" /><br /><br />
                  
                </div>
                <div className="butt">
                    <a>
                        <button onClick={register}>Create Account</button></a></div>


                <p>By signing in or creating an account you are <br />
                    agreeing to our Terms of Use and our <br />
                    Privacy Policy.</p>
                <br /><br />
                <p className="abhay">Already have an account?<a href="/login">Login</a></p>

                <div className="icon-1">
                    <div className="icon-2"> <a href="https://www.facebook.com/profile.php?id=100038200869527&mibextid=9R9pXO"> <i className="fa-brands fa-facebook"></i></a>  </div>
                    <div className="icon-3"> <a href="https://instagram.com/abhay_thakur__00?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"><i className="fa-brands fa-instagram"></i></a> </div>
                    <div className="icon-4"> <a href=""><i className="fa-brands fa-twitter"></i></a> </div>
                    <div className="icon-5"> <a href=""><i className="fa-brands fa-linkedin"></i></a></div></div>
            </div>
        </div>

    );
}

export default Create;
