import CostCodesList from "./CostCodesList";
import ViewSearch from "./ViewSearch";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import SelectList from "./SelectList";
import ActivityList from "./ActivityList";
import WorkWeekList from "./WorkWeekList";
import DismissableError from "../Error/DismissableError";
import Loading from '../Loading'

function ViewPage() {
    const [value, setValue] = useState("")
    const [path, setPath] = useState('/cost_codes')
    const {data, loading, error, setError} = useFetch(path)

    return(
        <div className="page-container">
            {error && <DismissableError error={error} setError={setError}/>}
            <ViewSearch setValue={setValue} value={value}/>
            <SelectList path={path} setPath={setPath} />
               <div style={{overflow: 'scroll'}}>
                {loading && <Loading loading={loading}/>}
                {path==='/cost_codes' ? (<CostCodesList value={value} costCodes={data} />) : 
                ( path==='/activities' ? (<ActivityList value={value} activities={data}/>) : 
                (<WorkWeekList value={value} workWeeks={data} />))}
            </div>
        </div>
    )
}

export default ViewPage;