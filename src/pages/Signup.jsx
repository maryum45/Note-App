import { useState } from 'react';
import Navbar from '../components/Navbar';
import PasswordInput from '../components/PasswordInput';
import {Link} from "react-router-dom"
import { ValidateEmail } from '../../helper';
const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)






    const handleSignUp = async (event) => {
        event.preventDefault();
        
            if(!name){
                setError("Please enter your name");
                return;
        
            }
        
            if(!ValidateEmail(email)){
                setError("Please enter your Email adress");
                return;
        
            }


            if(!password){
                setError("Please enter your password");
                return;
            }
            setError('')


            // Signup API
    }





    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleSignUp}>
                        <h4 className="text-2xl mb-7">Sign up</h4>
                        <input
                            placeholder="Name"
                            className="input-box"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />

                        <input
                            placeholder="Email"
                            className="input-box"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <PasswordInput
                            value={password} // Lowercase 'password' here as well
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        
                        {error && <p className="text-red-500 text-sm pb-1">{error}</p>}

                        <button type="submit" className="btn-primary">Create an Acount</button>
                        
                        <p className="text-sm text-center mt-4">
                            Already have an account?{" "}
                            <Link to="/Login" className="font-medium text-primary underline">
                                 Login
                            </Link>
                        </p>


                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup
