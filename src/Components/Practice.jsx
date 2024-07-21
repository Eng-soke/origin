
import { useState } from "react"
function Practice({close}){

   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [error, setError] = useState(false)



   const handleForm = (event)=>{
          event.preventDefault()
    if(title == "" && description == ""){
            setError(true)
    }
    setTimeout(()=>{
        setError(false)
    }, 4000)



    const newNote = {
        id: Date.now(),
        title: title,
        description: description
     }
      

     
      const getData = localStorage.getItem("data")
  
      let checkData = getData ? JSON.parse(getData) : []
  
      checkData = [...checkData, newNote]
  
      localStorage.setItem("data", JSON.stringify(checkData))


     


   }



   


  
    return <div className=" bg-second h-screen w-full absolute top-0">


        <div className="   flex justify-center mt-10">

            <div className="bg-white sm:w-[360px] w-[300px] h-[450px]">



                <form className=" relative">

                    <div className="p-5  ">

                        <i onClick={close} class="text-3xl absolute right-3 fa-solid fa-xmark"></i>
  
                     {
                        error == true ?  <p className="text-red-500">Fadlan soo geli Form ka </p> : ""
                     }
                        

                        <br />
                        <br />
                        <input value={title} onChange={(event)=>{
                            setTitle(event.target.value)
                        }} className="py-3 border-2 border-second  rounded sm:w-[300px] w-[260px] " type="text" placeholder="Enter Your Name"></input>


                        <textarea value={description} onChange={(event)=>{
                            setDescription(event.target.value)
                        }} className="sm:w-[300px] w-[260px] rounded mt-3 border-2 border-second" rows={8} placeholder="Enter Title" />


                        <button onClick={handleForm}  className="bg-second px-20 py-2 m-10"> Save</button>
                    </div>




                </form>

            </div>








        </div>
    </div>

   
}
export default Practice