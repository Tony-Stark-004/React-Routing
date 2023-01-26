import React from 'react'
import TableData from './TableData'


const TableHeader = (props) => {

  return (
    <>
      <table className="table my-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            <th scope="col">Batch</th>
            <th scope='col'>Change</th> 
          </tr>
        </thead>
          {           
          props.dummyData.map(element => {
          return <TableData studentData= {element} key={element.id} />
        })           
        } 
      </table>
    </>
  )
}

export default TableHeader