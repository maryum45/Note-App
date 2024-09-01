import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import {MdAdd, MdClose} from "react-icons/md"
import AddNote from "../components/AddNote";
import Modal from "react-modal";
const Home = () => {
    const [openAddEditModel, setOpenEditModel] = useState({
        isShown: false,
        type: "add",
        data: null,
    });
    return (
        <>
    <Navbar/>

    <div className="container mx-auto  ">
        <div className="grid grid-cols-3 gap-4 mt-8">

        <NoteCard
        title="Meeting on 7th April"
        date="3rd Apr 2024"
        content ="Meeting of the 7th april oooo"
        tags="#Meeting"
        isPinned ={true}
        onEdit={() =>{}}
        onDelete={() =>{}}
        onPinNote={() =>{}}
        />
        
    </div>
    </div>

    <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10 "
     onClick={() =>{
        setOpenEditModel({isShown: true, type: "add", date:null});
     }}
     >



        <MdAdd className="text-[32px] text-white"/>
    </button>
 
 
  <Modal 
  isOpen = { openAddEditModel.isShown}
  onRequestClose = {() =>{}}
  style={{
    overPlay :{
        backgroundColor : "rgba(0,0,0,0,2)",
    }
   
}}
contentLabel=""
className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
>
<AddNote
    onClose={() => {
        setOpenEditModel({ isShown: false, type: "add", data: null });
    }}
/>


</Modal> 
        
        </>

    )
}

export default Home;



// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import NoteCard from "../components/NoteCard";
// import { MdAdd } from "react-icons/md";
// import AddNote from "../components/AddNote";
// import Modal from "react-modal";

// const Home = () => {
//     const [openAddEditModel, setOpenEditModel] = useState({
//         isShown: false,
//         type: "add",
//         data: null,
//     });

//     return (
//         <>
//             <Navbar />
//             <div className="container mx-auto">
//                 <div className="grid grid-cols-3 gap-4 mt-8">
//                     <NoteCard
//                         title="Meeting on 7th April"
//                         date="3rd Apr 2024"
//                         content="Meeting of the 7th April oooo"
//                         tags="#Meeting"
//                         isPinned={true}
//                         onEdit={() => {}}
//                         onDelete={() => {}}
//                         onPinNote={() => {}}
//                     />
//                 </div>
//             </div>
//             <button
//                 className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
//                 onClick={() => {
//                     setOpenEditModel({ isShown: true, type: "add", data: null });
//                 }}
//             >
//                 <MdAdd className="text-[32px] text-white" />
//             </button>
//             <Modal
//                 isOpen={openAddEditModel.isShown}
//                 onRequestClose={() => setOpenEditModel({ ...openAddEditModel, isShown: false })}
//                 style={{
//                     overlay: {
//                         backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust opacity as needed
//                     },
//                 }}
//             >
//                 <AddNote />
//             </Modal>
//         </>
//     );
// };

// export default Home;
