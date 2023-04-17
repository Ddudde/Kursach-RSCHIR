import React, {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom"

export function Redirect() {
    const isFirstUpdate = useRef(true);
    const navigate = useNavigate();
    useEffect(() => {
        console.log("I was triggered during componentDidMount Redirect.jsx");
        navigate("/KursachRSCHIR");
        return function() {
            console.log("I was triggered1 during componentWillUnmount Redirect.jsx");
        }
    }, []);
    useEffect(() => {
        if (isFirstUpdate.current) {
            isFirstUpdate.current = false;
            return;
        }
        console.log('componentDidUpdate Redirect.jsx');
    });
    return <></>
}
export default Redirect;