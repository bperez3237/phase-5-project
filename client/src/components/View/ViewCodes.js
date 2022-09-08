import CostCodesList from "./CostCodesList";
import ViewSearch from "./ViewSearch";
import { useState } from "react";
import {Container} from 'react-bootstrap'
import useFetch from "../../hooks/useFetch";
import CostCode from "./CostCode";
import SelectList from "./SelectList";
import ActivityList from "./ActivityList";
import WorkWeekList from "./WorkWeekList";

function ViewCodes() {
    const [value, setValue] = useState("")
    const [path, setPath] = useState('/cost_codes')
    const {data} = useFetch(path)


    return(
        <Container>
            <ViewSearch setValue={setValue} value={value}/>
            <SelectList path={path} setPath={setPath} />
            {path==='/cost_codes' ? (<CostCodesList value={value} costCodes={data} />) : 
            ( path==='/activities' ? (<ActivityList value={value} activities={data}/>) : 
            (<WorkWeekList />))}
        </Container>
    )
}

export default ViewCodes;