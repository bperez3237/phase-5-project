import {Button, Container} from 'react-bootstrap'

function SelectList({path, setPath}) {

    const tables = [
        { name: 'Cost Code', value: '/cost_codes' },
        { name: 'Activities', value: '/activities' },
        { name: 'Work Week', value: '/work_weeks' }
    ]

    return(
        <Container className='d-flex justify-content-center'> 
            {tables.map((table,index) => (
                <Button key={index} className="m-3" size="lg" variant={path===table.value ? 'danger' : 'primary'} value={table.value} onClick={(e)=>setPath(e.target.value)}>{table.name}</Button>
            ))}
        </Container>
    )
}

export default  SelectList;