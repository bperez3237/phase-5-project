import WeeklyReport from "../containers/WeeklyReport";
import {formatCurrency} from '../services/Format/FormatNumber'

function ReportPage() {
    console.log(formatCurrency(1000))

    return(
        <>
            <WeeklyReport />
        </>
    )
}

export default ReportPage;