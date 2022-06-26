
import React from "react";
import {FC} from "react";
import {usersProps,listProps} from './index'
const DataList:FC<any>=(props)=>{
    const {list,users} = props


    return (
        <table>
            <thead>
            <tr>
                <th>负责人</th>
                <th>项目</th>
            </tr>
            </thead>
            <tbody>
            {list?.map((item:listProps)=>{
                return (
                    
                    <tr key={item.id}> 
                        <td>{users.find((user:usersProps)=>(
                            user.id===item.personId
                        ))?.usersName} </td>
                        <td>{item.projectName}</td>
                    </tr>
                )
            })}
            </tbody>
           
        </table>
        
    )
}

export default  DataList