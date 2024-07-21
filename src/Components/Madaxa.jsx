

import Body from "./Body"
import { useState } from "react"
function Madaxa(){

    const [clickAdd, setClickAdd] = useState(false)
    const handleClick = ()=>{
        setClickAdd(true)

    }

    const handleBack = ()=>{
        setClickAdd(false)
    }


    return <div>

   
    <div className="bg-fuchsia-500 p-3  flex justify-between sm:px-10">
        <h1 className=" text-4xl font-bold ">Nooty</h1>
        <button onClick={handleClick} className=" bg-stone-500 p-3 sm:px-12 px-8 text-2xl font-bold">Add Note</button>

    </div>
        {
            clickAdd == true ? <Body handleClose={handleBack} /> : ""
        }

    </div>
}
export default Madaxa