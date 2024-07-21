import Practice from "./Practice"
import { useState } from "react"
function Header2(){

    const [click, setClick] = useState(false)
    const  handleClick =()=>{
        setClick(true)
    }
    
    const handleClose =()=>{
        setClick(false)
    }




    return <div>

  
      <div className="bg-primary py-3 flex justify-between px-6">
        <h1 className="text-3xl text-white font-bold">Eng Soke</h1>
        <h1 onClick={handleClick} className="text-3xl bg-second px-10 py-3 text-white font-bold">Add Note</h1>
    </div>
        {
            click == true ? <Practice close={handleClose} /> : ""
        }
    </div>
}
export default Header2