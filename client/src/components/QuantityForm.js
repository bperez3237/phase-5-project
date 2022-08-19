import {Button, Form } from 'react-bootstrap'
import {useState,useEffect} from 'react'

function QuantityForm({activity}) {
    console.log(activity)


    return (
        <>
            <Form.Label>activity.name</Form.Label>
            <Form.Control />
        </>
    )
}
export default QuantityForm;