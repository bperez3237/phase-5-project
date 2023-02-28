import React from 'react'
import {Card} from 'react-bootstrap'
import {formatCurrency, formatNumber} from '../../services/Format/FormatNumber'


function CostCodesList({value, costCodes}) {
    
    const codeElems = costCodes?.filter((costCode)=>{
        if (costCode?.name?.includes(value) || costCode?.code?.includes(value)) {return true} 
        else { return false}
    }).map((costCode)=>{
        return(
            <Card key={costCode?.id} className='element'>
                <Card.Body>
                    <Card.Title>{costCode?.code} - {costCode?.name}</Card.Title>
                    <Card.Text>Budgted Hours: {formatNumber(costCode?.budget_hours)} - Hours to Date: {formatNumber(costCode?.current_hours)}</Card.Text>
                    <Card.Text>Budgeted Quantity: {formatNumber(costCode?.budget_quantity)} {costCode?.unit_of_measure} - Quantity to Date: {formatNumber(costCode?.current_quantity)} {costCode?.unit_of_measure}</Card.Text>
                    <Card.Text>Budgeted Cost: {formatCurrency(costCode?.budget_hours*110)} - Cost to Date: {formatCurrency((costCode?.current_cost*100)/100)}</Card.Text>
                </Card.Body>
            </Card>  
        )
    })

    return(
        <>
            {codeElems}
        </>
    )
}
export default CostCodesList;