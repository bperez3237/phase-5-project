import { useEffect, useState } from 'react'
import QFormList from '../containers/QFormList'

function EnterQuantities() {
    const [costCodes, setCostCodes] = useState([])

    useEffect(()=>{
        fetch('/codes_with_costs')
            .then(r=>r.json()).then(data=>setCostCodes(data))
    },[])

    return (
        <QFormList />
    )
}
export default EnterQuantities