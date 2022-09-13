import CostCodesList from "./CostCodesList";
import ViewSearch from "./ViewSearch";
import { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import useFetch from "../../hooks/useFetch";
import SelectList from "./SelectList";
import ActivityList from "./ActivityList";
import WorkWeekList from "./WorkWeekList";

function ViewPage() {
    const [value, setValue] = useState("")
    const [path, setPath] = useState('/cost_codes')
    const {data} = useFetch(path)


    return(
        <Container className="">
            <Row>
                <Col>
                    <ViewSearch setValue={setValue} value={value}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SelectList path={path} setPath={setPath} />
                </Col>
            </Row>
            <Row>
                <Col>
                    {path==='/cost_codes' ? (<CostCodesList value={value} costCodes={data} />) : 
                    ( path==='/activities' ? (<ActivityList value={value} activities={data}/>) : 
                    (<WorkWeekList value={value} workWeeks={data} />))}
                </Col>
            </Row>
        </Container>
    )
}

export default ViewPage;