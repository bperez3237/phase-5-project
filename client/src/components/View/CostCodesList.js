import React from 'react'
import {useState, useEffect} from 'react'
import CostCode from './CostCode'
import {Container, ButtonGroup, ToggleButton, Button } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'

function CostCodesList({value}) {
    const [checked, setChecked] = useState(false);
    const [path, setPath] = useState('/cost_codes');
    const {data} = useFetch(path)

    console.log(path)
    const tables = [
        { name: 'Cost Code', value: '/cost_codes' },
        { name: 'Activities', value: '/activities' },
        { name: 'Costs', value: '/costs' },
        { name: 'Units', value: '/units' }
    ]

    // useEffect(()=> {
    //     fetch(`/cost_codes`)
    //         .then(r=>r.json())
    //         .then((data)=>setCostCodes(data))
    // },[])
    
    const codeElems = data?.filter((costCode)=>{
        if (costCode.name.includes(value) || costCode.code.includes(value)) {return true} 
        else { return false}
    }).map((costCode)=><CostCode key={costCode.id} costCode={costCode} />)


    
    return(
        <>
            <>
                {/* <ToggleButton checked={checked}  */}
                {/* {tables.map((table, index)=>(
                    <ToggleButton key={index} value={table.value} checked={path == table.value} onChange={(e)=>{
                        console.log(e.target.value)
                        setPath(e.currentTarget.value)
                    }}>{table.name}</ToggleButton>
                ))} */}
                {tables.map((table,index) => (
                    <Button key={index} value={table.value} onClick={(e)=>setPath(e.target.value)}>{table.name}</Button>
                ))}
            </>
            {codeElems}
        </>
    )
}
export default CostCodesList;