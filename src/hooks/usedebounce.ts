import { useEffect, useState } from "react";

type usedebouncetype = <T>(value:T,delay:number)=>T
export const useDebounce:usedebouncetype=(value,delay)=>{
    const [debounceValue,setdebounceValue] = useState(value)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setdebounceValue(value)
        },delay)
        return(()=>{
            clearTimeout(timer)
        })
    },[value,delay])
    return debounceValue
}
//测试



