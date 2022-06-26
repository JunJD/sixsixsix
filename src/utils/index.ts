
type ClearEmptyPropertyProps= <T extends {[key:string|symbol]:any}>(obj:T)=>T

export const ClearEmptyProperty:ClearEmptyPropertyProps=(obj)=>{
    let result={...obj};
    Object.keys(obj).forEach((item:string)=>{

        if(!(obj[item])){
            delete result[item]
        }
    })
    return result
}


