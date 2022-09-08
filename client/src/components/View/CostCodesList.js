import React from 'react'
import {useState, useEffect} from 'react'
import CostCode from './CostCode'
import {Container, ButtonGroup, ToggleButton, Button } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'

function CostCodesList({value, costCodes}) {
    
    const codeElems = costCodes?.filter((costCode)=>{
        if (costCode?.name?.includes(value) || costCode?.code?.includes(value)) {return true} 
        else { return false}
    }).map((costCode)=><CostCode key={costCode.id} costCode={costCode} />)

    return(
        <>
            {codeElems}
        </>
    )
}
export default CostCodesList;