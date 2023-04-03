import ProjectInfo from "./ProjectInfo";
import ChangeWeek from "./ChangeWeek";
import PagesInfo from './PagesInfo';
import WeekStatus from './WeekStatus';
import './Home.css'
import { useContext } from 'react';
import { WorkWeekContext } from "../../context/WorkWeekContext";
import SelectWeek from "./SelectWeek";

function Home() {
    const {workWeek} = useContext(WorkWeekContext)

    return(
        <div className='page-container homepage' >
            {!workWeek && <SelectWeek />}

            <div className='home-header'>
                <ChangeWeek />
                <WeekStatus />
            </div>
            <PagesInfo />
            <ProjectInfo />
        </div>
        
    )
}

export default Home;