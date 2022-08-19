import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import CostForm from "../containers/CostForm";


function Upload() {
    const {user, setUser} = useContext(UserContext)

    return (
        <>
            <CostForm />
            <h1>{user.name}</h1>
        </>
    )
}

export default Upload;