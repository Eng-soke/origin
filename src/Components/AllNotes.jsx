import { useEffect, useState } from "react"

function AllNotes(){

        const [data, setData] = useState([])

        useEffect(()=>{
                
                    const allNotes = JSON.parse(localStorage.getItem("data"))
                    setData(allNotes)

        })

        const handleDelete = (id)=>{
                const findNotes = data.findIndex((note)=>note.id == id)
                if(findNotes)
                        data.splice(findNotes,1)
                localStorage.setItem("data", JSON.stringify(data))
                

                

        }

    

    return <div className=" grid grid-cols-[300px_300px_300px] gap-2 justify-center px-1 mt-20  ">
        {
                data.map((note)=>{
                        return  <div id="text" className="w-full p-3 h-[200px] border-2 border-black bg-gray-200  ">
                                <h1 className="text-2xl border-2 border-gray-400 font-bold">{note.title} </h1>
                                <p>{note.description}</p>
                                <button onClick={()=> handleDelete(note.id)} id="button" hidden className="bg-red-500 text-white rounded p-2 px-5 mt-20" >Delete</button>
                        </div>
                })
        }
    
    </div> 
}
export default AllNotes