import { useState } from "react"
import Form from "./Form"
function Header(){
  
    const [isOpen, setIsOpen] = useState (false)

    const handleopen = ()=>{
        setIsOpen(true)
    }

    const handleClose = ()=>{
        setIsOpen(false)
    }
  



    return <div>

   
    <div className="bg-primary flex justify-between py-5 px-5">

        <h1 className="text-4xl font-bold text-white ">Note</h1>

        <button onClick={handleopen} className="bg-second py-2 px-10 rounded "> Add Note</button>
        
    </div>

    {
        isOpen == true ? <Form handle={handleClose}/ > : ""
    }
   
    </div>
}
export default Header