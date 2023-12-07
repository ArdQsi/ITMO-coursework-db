import React, {useEffect} from 'react';

import {Redirect, useLocation, useParams} from 'react-router-dom';


const InfoPage = () => {
    console.log(useLocation())
    const location = useLocation();
    const state = location.state;
    const url = 'http://localhost:8080/assembly'

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => console.log(response))
            // .then((response) => setData(response))
    }, [])

    return (
        <div> {state.computercasesid} </div>
    );
};

export default InfoPage;