
export const replace = (objArray, newObj) => {
    const filteredArray = objArray.filter((obj)=>obj.id!==newObj.id)
    return [...filteredArray, newObj]
}