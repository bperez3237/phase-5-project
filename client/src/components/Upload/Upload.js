import React, {useContext} from "react";
import UploadForm from "./UploadForm";
import ActivityList from "./ActivityList";
import {WorkWeekContext} from '../../context/WorkWeekContext'
import useFetch from "../../hooks/useFetch";
import {ActivitiesContext} from './context/ActivitiesContext'
import DeleteTimesheet from './DeleteTimesheet'


function Upload() {
    const {workWeek} = useContext(WorkWeekContext)
    const {data, setData} = useFetch(`/work_weeks/${workWeek.id}/activities`)

    return (
        <div className="page-container">
            <ActivitiesContext.Provider value={{activities: data, setActivities:setData}}>
                <div className="edit-container">
                    <UploadForm />
                    <DeleteTimesheet />
                </div>
                <div className="activity-container">
                    <h2 style={{color:'white'}}>Activities</h2>
                    <ActivityList />
                </div>
            </ActivitiesContext.Provider>
        </div>
    )
}

export default Upload;