import CostCodesList from "../containers/CostCodesList";
import ViewSearch from "../components/ViewSearch";
// import {UserContext} from '../context/UserContext'
import { useState } from "react";
import {Container} from 'react-bootstrap'



function ViewCodes() {
    const [value, setValue] = useState("")
    
    return(
        <Container>
            <ViewSearch setValue={setValue} value={value}/>
            <CostCodesList value={value}/>
        </Container>
    )
}

export default ViewCodes;