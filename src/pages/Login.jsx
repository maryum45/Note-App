import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput"; // Assuming this is a custom password input component
import { ValidateEmail } from "../../helper";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // Lowercase 'password' for state
    const [error, setError] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();

        if (!ValidateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password) {
            setError("Please enter the password.");
            return;
        }

        setError("");
       
        // Login API
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleLogin}>
                        <h4 className="text-2xl mb-7">Login</h4>

                        <input
                            type="text"
                            placeholder="Email"
                            className="input-box "
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <PasswordInput
                            value={password} // Lowercase 'password' here as well
                    
                            onChange={(event) => setPassword(event.target.value)}

                            
                        />

                        {error && <p className="text-red-500 text-sm pb-1">{error}</p>}

                        <button type="submit" className="btn-primary">Login</button>
                        
                        <p className="text-sm text-center mt-4">
                            Not registered yet?{" "}
                            <Link to="/signUp" className="font-medium text-primary underline">
                                Create an Account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
