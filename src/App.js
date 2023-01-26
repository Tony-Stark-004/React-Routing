import React, {useState} from 'react'
import Form from './Components/Routes/Form'
import NavBar from './Components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TableHeader from './Components/Table/TableHeader'
import homoimage from './Components/assest/OIP.jpg'


const App = () => {

  const dummy = [
    {name:"Aditya", age:"22", course:"MERN", batch:"September", id:`${Math.random()}`},
    {name:"Vishal", age:"25", course:"MERN", batch:"October", id:`${Math.random()}`}
                ]

  const [dataArr, setDataArr] = useState(dummy)

  const formDataIntoApp = (arguementFromForm) => {

  let data = { ...arguementFromForm }
    console.log(data);

    const finalData = [...dataArr, data]
    setDataArr(finalData)
    console.log(finalData);
}

console.log(dataArr);


  return (
  <BrowserRouter>
    <NavBar />
    
    <Routes>
       <Route exact path='/home' element={<img src={homoimage} alt='homeimage' />}></Route>
       <Route exact path='/form' element={<Form dataFromForm={formDataIntoApp}/>}></Route> 
       <Route exact path='/student' element={<TableHeader dummyData={dataArr} />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
