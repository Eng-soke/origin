import { useState } from "react"
import {toast, Toaster } from "react-hot-toast"
function Body({handleClose}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)


    const handleSave = (event)=>{
        event.preventDefault()
        if(title == "" && description == ""){
            setError(true)
        }

        setTimeout(()=>{
            setError(false)
        },4000)

        const newNote = {
           id: Date.now(),
            title : title,
            description : description

        }
        
        const getData = localStorage.getItem("data")
        let checkData = getData ? JSON.parse(getData) : []
        checkData =  [...checkData, newNote]

            
        localStorage.setItem("data", JSON.stringify(checkData))

        toast.success(" Save Note Successfully", {
            position: "top-right",
        })
           
    }



    return <div className="bg-stone-500 h-screen w-full absolute top-0 flex justify-center py-10">
        <div className="bg-black py-5">
            <form className="  px-12 relative">
            <i onClick={handleClose} class="text-5xl text-white absolute right-10  fa-solid fa-xmark"></i>
            {
                error == true ? <p className="text-red-500">Fadlan buuxi form ka</p> : ""
            }
            <br/>
            <br/>
            <br/>
                <input value={title} onChange={(event)=>{

                    setTitle(event.target.value)

                }} className="w-[300px] py-2" type="text" placeholder="Enter Title"></input>
                <br />
                <br />
                <textarea value={description} onChange={(event)=>{
                    setDescription(event.target.value)

                }} className="w-[300px] " rows={8} placeholder="Description" />
                <br/>
                <button onClick={handleSave} className="bg-stone-500 rounded p-2 px-20 mt-3 ml-14 sm:ml-0 sm:m-12 text-white ">Save</button>
            </form>
        </div>
        <Toaster/>
    </div>
}
export default Body




