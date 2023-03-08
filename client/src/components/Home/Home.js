import ProjectInfo from "./ProjectInfo";
import ChangeWeek from "./ChangeWeek";
import PagesInfo from './PagesInfo';
import WeekStatus from './WeekStatus';
import './Home.css'

function Home() {

    return(
        <div className='page-container homepage' >
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