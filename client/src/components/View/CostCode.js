import {Card} from 'react-bootstrap'
import {formatCurrency} from '../../services/Format/FormatNumber'

function CostCode({costCode}) {

    return(
        <Card style={{border:'1px', borderStyle:'solid'}}>
            <Card.Title>{costCode.code} - {costCode.name}</Card.Title>
            <Card.Text>Budgted Hours: {costCode.budget_hours} - Hours to Date: {costCode.current_hours}</Card.Text>
            <Card.Text>Budgeted Quantity: {costCode.budget_quantity} {costCode.unit_of_measure} - Quantity to Date: {costCode.current_quantity} {costCode.unit_of_measure}</Card.Text>
            <Card.Text>Budgeted Cost: {formatCurrency(costCode.budget_hours*110)} - Cost to Date: ${formatCurrency((costCode.current_cost*100)/100)}</Card.Text>
        </Card>
        
    )
}

export default CostCode; 