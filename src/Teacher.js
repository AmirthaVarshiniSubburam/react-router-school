import axios from 'axios'
import React, { useState } from 'react'

function Teacher() {
    let api= axios.create({
        baseURL:"http://localhost:3000/teachers"
    })

    let[teacher,setTeacher]=useState([])

    let refreshAll = ()=> {
        api.get ("/").then (res=>{
            setTeacher(res.data)

        })
    }

  return (
    <div>
        <h2>Teacher data</h2>
        <button onClick={refreshAll}>Display the data</button>
        <table border="1">
    <thead>
        <tr>
            <th>ID</th>
            <th>Teacher Name</th>
            
        </tr>
    </thead>
    <tbody>
        {
            teacher.map(teacher=>(
                <tr key={teacher.id}>
                    <td>
                        {teacher.id}
                    </td>
                    <td>
                        {teacher.teacherName}
                    </td>                                
                </tr>
            ))
        }
    </tbody>
</table>

    </div>
  )
}

    
  


export default Teacher