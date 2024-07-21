import { useEffect, useState } from "react";
import {toast, Toaster } from "react-hot-toast"
function DhamaanNotes(){

    const [data, setData] = useState([])

    useEffect(()=>{

        const dhmaanNotes = JSON.parse(localStorage.getItem("data"))
        setData(dhmaanNotes)

        
    })


    // delate note

    const handleDelete = (id) => {
      
        const findNotes = data.findIndex((note)=> note.id == id)

        if(findNotes){
            
            data.splice(findNotes, 1)

            localStorage.setItem("data", JSON.stringify(data))

            toast.success("Deleted notes successfully", {
                position: "top-right",
            })
        }

    }
    

    return <div  className=" grid sm:grid-cols-[320px_320px_320px] grid-cols-[300px] gap-10 m-12 sm:m-20 ">
        {
          data.map((note)=>{
                return <div id="box" className=" border-2 border-gray-700 w-full h-[180px] p-5">
                    <h1 className="text-2xl font-bold border-b-2 border-gray-200"> {note.title} </h1>
                    <p> {note.description} </p>
                    <button onClick={()=> handleDelete(note.id) } id="btn" className="bg-red-500 hidden text-white mt-16 py-1 rounded px-3 ">Delete</button>
                </div>
            })
        }
        
           

        <Toaster />
    </div>

}
export default DhamaanNotes;