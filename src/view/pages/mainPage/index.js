import React from 'react';
import PredictionTable from "../../containers/predictionTable";

export default function MainPage({leagueid}){
    return  (
        <>
            <h1>Main Page</h1>
            <PredictionTable/>
        </>
    )
}