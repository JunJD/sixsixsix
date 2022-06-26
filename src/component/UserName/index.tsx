import React, { useEffect, useState } from "react";
import {FC} from "react";

import axios from "axios";
import qs from "qs";
import SearchInput from './SearchInput'
import DataList from "./DataList";

/* 自定义的hooks */
import {useMount} from "hooks/usemount";
import { useDebounce } from "hooks/usedebounce";

import {ClearEmptyProperty} from './../../utils'

const apiUrl = process.env.REACT_APP_API_URL

console.log(apiUrl)
export interface usersProps{
    id:number,
    usersName:string
}
export interface listProps{
    id:number,
    personId:number,
    projectName:string
}
export interface paramsProps{
    personId:string,
    projectName:string
}

const UserName:FC=()=>{
    const [params,setParams] = useState<paramsProps>({
        personId:'',
        projectName:''
    })
    const [users,setUsers] = useState<usersProps[]>([])
    const [list,setList] = useState<listProps[]>([])
    const useDebounceValue = useDebounce(params,200)
    useEffect(()=>{
        axios.get(`${apiUrl}/project?${qs.stringify(ClearEmptyProperty(useDebounceValue))}`).then(
            res=>{
                const listRes =res.data as listProps[]

                setList(listRes)
            }
        )
    },[useDebounceValue])

    useMount(()=>{
        axios.get(`${apiUrl}/users`).then(
            res=>{
                const usersRes =res.data as usersProps[]
                setUsers(usersRes)
            }
        )
    })
    return (
        <>
        <SearchInput params={params} setParams={setParams}  users={users} />
        <DataList list={list}   users={users}/>
        </>
    )
}

export default  UserName