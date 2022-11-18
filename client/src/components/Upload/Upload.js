import React, {useContext} from "react";
import UploadForm from "./UploadForm";
import ActivityList from "./ActivityList";
import {WorkWeekContext} from '../../context/WorkWeekContext'
import useFetch from "../../hooks/useFetch";
import {ActivitiesContext} from './context/ActivitiesContext'
import ActivitiesStatus from "./ActivityStatus";
import DeleteTimesheet from './DeleteTimesheet'
// import DismissableError from "../Error/DismissableError";
// import '../../App.css'



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
                    <ActivitiesStatus />
                    <ActivityList />
                </div>
            </ActivitiesContext.Provider>
        </div>
    )
}

export default Upload;