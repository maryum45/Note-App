import React from 'react'
import { getInitials } from '../../helper'


const ProfileInfo = () =>{
    return(
    <div className="flex items-center gap-5"> 
        <div className='w-12 h-12 items-center flex justify-center rounded-full text-slate-950 bg-slate-100 '>
            {getInitials("Maryama Mohamed")}
        </div>
        <div>
            <p className='text-sm font-medium'>Mohamed Maryama</p>
            <button className='text-sm text-slate-700 underline'>LogOut</button>
        </div>
    </div>
 
    )
}


export default ProfileInfo