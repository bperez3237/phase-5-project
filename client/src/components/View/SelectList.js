import {Button} from 'react-bootstrap'

function SelectList({path, setPath}) {

    const tables = [
        { name: 'Cost Code', value: '/cost_codes' },
        { name: 'Activities', value: '/activities' },
        { name: 'Work Week', value: '/work_weeks' }
    ]

    return(
        <> 
            {tables.map((table,index) => (
                <Button key={index} variant={path==table.value ? 'danger' : 'primary'} value={table.value} onClick={(e)=>setPath(e.target.value)}>{table.name}</Button>
            ))}
        </>
    )
}

export default  SelectList;