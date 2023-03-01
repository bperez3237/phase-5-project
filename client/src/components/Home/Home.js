import ProjectInfo from "./ProjectInfo";
import WeekSelect from "./WeekSelect";
import PagesInfo from './PagesInfo';
import WeekStatus from './WeekStatus';
import './Home.css'

function Home() {

    return(
        <div className='page-container homepage' >
            <div className='home-header'>
                <WeekSelect />
                <WeekStatus />
            </div>
            
            <PagesInfo />
            <ProjectInfo />
        </div>
        
    )
}

export default Home;