import React from "react";
import {FC} from "react";
import {ChangeEvent,Dispatch,SetStateAction} from 'react'
import {usersProps,paramsProps} from './index'



interface SearchInputProps{
  params:paramsProps
  setParams:Dispatch<SetStateAction<paramsProps>>
  users:usersProps[]
}
const SearchInput:FC<SearchInputProps>=(props)=>{
    const {params,setParams,users}=props
    const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        setParams({
          ...params,
          projectName:e.target.value
        })
    }

    const handleChangeSelect = (e:ChangeEvent<HTMLSelectElement>) => {
      setParams({
        ...params,
        personId:e.target.value
      })
    }
    return (
       <div>
         <input type="text" value={params.projectName} onChange={handleChangeInput} />
         <select  onChange={handleChangeSelect}>
          <option value="">负责人</option>
            {users.map((item:usersProps)=>{
              return (<option key={item.id} value={item.id}>{item.usersName}</option>)
            })}
         </select>
       </div>
        
    )
}

export default  SearchInput