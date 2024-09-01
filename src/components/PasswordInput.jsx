import React, { useState } from  'react'
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6"

const PasswordInput = ({value, onChange, placeholder}) =>{

    const [isShowPassword, setIsPassword] = useState(false);

    const toggleShowPassword =() =>{
        setIsPassword(!isShowPassword)
    };


    return (
        <div className="flex items-center bg-transparent border-[3px] rounded mb-3">
        <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "password"}
        className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none p-4'
        />

        {isShowPassword ? (
            <FaRegEye
        size={22}
        className="text-primary cursur-pointer"
        onClick={() => toggleShowPassword ()}
        />
        ):(
            <FaRegEyeSlash 
            size={22}
            className="text-slate-500 cursor-pointer"
            onClick={() => toggleShowPassword()}
            />

        )}
        </div>
        
    )
}

export default PasswordInput