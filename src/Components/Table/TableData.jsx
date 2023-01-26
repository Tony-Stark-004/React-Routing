import React from 'react'
import { Link } from 'react-router-dom'

const TableData = (props) => {

  return (
    <>
      <tbody>
        <tr>
          <td>{props.studentData.name}</td>
          <td>{props.studentData.age}</td>
          <td>{props.studentData.course}</td>
          <td>{props.studentData.batch}</td>
          <td><Link to="/form"><button type="button" className="btn btn-dark">Edit</button></Link></td>
        </tr>
      </tbody>
    </>
  )
}

export default TableData