import React from "react";
import { useState } from "react";
import ProfileInfo from '../components/ProfileInfo'
import { useNavigate } from "react-router-dom";
import Seachbar from "../Searchbar";

const  Navbar =() =>{

    const [SearchQuery, setSearchQuery] = useState("")

    const Navigate = useNavigate

    const onLogout = () =>{
        Navigate("/login")
    }

    const handleSearch = () =>{

    }

    const onClearSearch = () =>{
        setSearchQuery("")
    }

  
    return (
     <div className="bg-white flex items-center justify-between px-6 py-2  drop-shadow">
        <h2 className="text-2xl font-medium text-black py-2">Notes</h2>



      <Seachbar
      value={SearchQuery}
      onChange={({target}) =>{
        setSearchQuery(target.value);
      }}
      handleSearch={handleSearch}
      onClearSearch={onClearSearch}
      />
        <ProfileInfo onLogout={onLogout} /> 
 </div>
    )
}



export default Navbar