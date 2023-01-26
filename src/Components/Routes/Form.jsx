import React, {useState} from 'react'
import { Link } from 'react-router-dom'


const Form = (props) => {

const[name, setName] = useState('')
const nameHandler = (event) => {
  setName(event.target.value)
}

const[age, setAge] = useState('')
const ageHandler = (event) => {
  setAge(event.target.value)
}

const[course, setCourse] = useState('')
const courseHandler = (event) => {
  setCourse(event.target.value)
}

const[batch, setBatch] = useState('')
const batchHandler = (event) => {
  setBatch(event.target.value)
}


const submitHandler = (event) => {
  // event.preventDefault();

  const object = {
    name:name, 
    age:age, 
    course:course, 
    batch:batch, 
    id:`${Math.random()}`
  }

  props.dataFromForm(object)
  console.log(object);
  
  setName('')
  setAge('')
  setCourse('')
  setBatch('')
}



  return (
    <>
    <div className='container' style={{marginTop:'50px', marginBottom:'20px', width:'800px'}}>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" onChange={nameHandler} vlaue={name} placeholder="First name" aria-label="First name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" onChange={ageHandler} vlaue={age} placeholder="Age" aria-label="Age" />
        </div>
      </div>
    </div>

    <div className='container' style={{marginTop:'50px', marginBottom:'20px', width:'800px'}}>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" onChange={courseHandler} vlaue={course} placeholder="Course" aria-label="Course" />
        </div>
        <div className="col">
          <input type="text" className="form-control" onChange={batchHandler} vlaue={batch} placeholder="Batch" aria-label="Batch" />
        </div>
      </div>
    </div>

    <div className='container' style={{marginTop:'10px', marginBottom:'20px', width:'800px'}}>
        <Link to='/student'><button type="button" className="btn btn-dark">Cancel</button></Link>
        <Link to='/student'><button type="button" onClick={submitHandler} className="btn btn-dark mx-2">Update</button></Link>
    </div>
    </>
  );
}

export default Form