import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ClimbingBoxLoader } from "react-spinners";
import { getStrains } from "./strainsSlice";
import Strain from "./Strain";

export default function Strains() {
    const strains = useSelector(state => state.strains.strains);
    const isFetching = useSelector(state => state.strains.isFetching);
    // const error = useSelector(state => state.strains.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStrains());
    }, [dispatch]);

    return (
        <>
        {isFetching ? (
            <ClimbingBoxLoader />
        ) : (
            <div>
                <div className="menu">
                    <h1 style={{textAlign: 'center', color: 'white', fontWeight: '700', backgroundColor: '#264D2F', padding: '2%', width: '600px', boxShadow: '3px 5px 3px black'}}>Strain Menu:</h1>
                </div>
                <div className="strainslist">
                {/* {error.length ? error && <p>{error}</p> : <></>} */}
                {strains.map((item, index) => (
                    <Strain strain={item} key={index} allowSave />
                ))}
                </div>
            </div>
        )}
        </>
    );
};