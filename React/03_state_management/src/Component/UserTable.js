import React from 'react'

export default function UserTable({user,start}) {
    return (
       <table className="table table-striped">
           <thead >
               <tr>
                   <th>Sno.</th>
                   <th>Name</th>
                   <th>Gender</th>
                   <th>Email</th>
                   <th>Image</th>
               </tr>
           </thead>
           <tbody>
               {user.map((u,index)=>{
                return   <tr key={`user-${index}`}>
                       <td>{start+index+1}</td>
               <td>{u.name.title} {u.name.first} {u.name.last}</td>
               <td>{u.gender}</td>
               <td>{u.email}</td>
               <td><img src={u.picture.thumbnail}/></td>
                   </tr>
               })}
           </tbody>
       </table>
    )
}
