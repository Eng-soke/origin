
function Noots(){

    const allNotes = JSON.parse(localStorage.getItem("note"))




    return <div>
            <h1>This is Note</h1>

            <div className=" grid grid-cols-[300px_300px_300px] gap-2 justify-center px-1 ">
                {
                    allNotes.map((note)=>{
                        return <div className="w-full  h-[200px] border-2 border-black bg-gray-200  ">
                            <h1 className="font-bold">{note.title} </h1>
                            <p>{note.description} </p>
                        </div>
                    })
                }
                
              
            </div>x
    </div>
}
export default Noots