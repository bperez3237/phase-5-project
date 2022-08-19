import CostCodesList from "../containers/CostCodesList";
import {UserContext} from '../components/UserContext'
import { useContext } from "react";


function ViewCodes() {
    // const msg = useContext(UserContext)
    const {user,setuser} = useContext(UserContext)

    return(
        <>
            <CostCodesList />
            {/* <p>{msg}</p> */}
        </>
    )
}

export default ViewCodes;