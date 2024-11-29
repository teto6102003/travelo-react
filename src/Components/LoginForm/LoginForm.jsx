import "./LoginForm.css";
import FormLogo from "../FormLogo/FormLogo";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState(null);


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("http://localhost:3000/userData?email="+email);
                const data = await response.json();
                setUserData(data[0]); 
            
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, [email]);

    const loginValidation = (e) => {
        e.preventDefault();

        if (userData && email === userData.email && password === userData.password) {
    
            localStorage.setItem("isLoggedIn", "true"); 
            navigate("/userProfile/"+email); 
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="display-center">
            <form id="login-form" onSubmit={loginValidation}>
                <FormLogo />
                <div id="login-input">
                    <input
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="buttons">
                    <input type="submit" value="Login" className="form-button" />
                    <NavLink to="/SignUp" className="form-button">
                        Sign Up
                    </NavLink>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
