import {Card} from 'react-bootstrap'

function CostCode({costCode}) {

    return(
        <Card style={{border:'1px', borderStyle:'solid'}}>
            <Card.Title>{costCode.code} - {costCode.name}</Card.Title>
            <Card.Text>Budgted Hours: {costCode.budget_hours} - Hours to Date: {costCode.current_hours}</Card.Text>
            <Card.Text>Budgeted Quantity: {costCode.budget_quantity} {costCode.unit_of_measure} - Quantity to Date: {costCode.current_quantity} {costCode.unit_of_measure}</Card.Text>
            <Card.Text>Budgeted Cost: ${costCode.budget_hours*110} - Cost to Date: ${Math.round(costCode.current_cost*100)/100}</Card.Text>
        </Card>
        
    )
}

export default CostCode; 