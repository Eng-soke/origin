import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Header from "./Components/Header"
import Noots from './Components/Noots'

import Header2 from "./Components/Header2"
import AllNotes from './Components/AllNotes'
import Madaxa from "./Components/Madaxa"
import DhamaanNotes from "./Components/DhamaanNotes"


ReactDOM.createRoot(document.getElementById('root')).render(
<div>
    {/* <Header />
    <<Noots /> */}
    {/* <Header2 />
    <AllNotes/> */}
  <Madaxa/>
  <DhamaanNotes/>
 
</div>

)
