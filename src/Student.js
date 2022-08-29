import React, { useState } from 'react'
import axios from 'axios'

function Student() {
    let api= axios.create({
        baseURL:"http://localhost:3000/students"
      })

      let [student,setStudent]=useState([])

       let refreshAll = ()=> {
        api.get ("/").then (res=>{
            setStudent(res.data)
            // console.log(res);
        })

      }

  return (
    <div>
        <h2>Student rank</h2>
        <button onClick={refreshAll} >Display the data
        </button>
<table border="1">
    <thead>
        <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Rank</th>
        </tr>
    </thead>
    <tbody>
        {
            student.map(student=>(
                <tr key={student.id}>
                    <td>
                        {student.id}
                    </td>
                    <td>
                        {student.studentname}
                    </td>
                    <td>
                        {student.Rank}
                    </td>
                  
                </tr>
            ))
        }
    </tbody>
</table>

    </div>
  )
}

export default Student











