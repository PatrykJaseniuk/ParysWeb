//zwraca nazwę parametru jako string
export const getParametrName =(object:Object, parametr:any)=>{
    return Object.keys(object).find(key=>object[key as keyof object]===parametr) as string
}