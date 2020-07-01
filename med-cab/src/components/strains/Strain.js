import React from "react";
import { useDispatch } from "react-redux";
import { addStrainToSaved, removeStrainFromSaved } from "../../store/actions";
import "bootstrap/dist/css/bootstrap.css";

const Strain = props => {
    const dispatch = useDispatch();
    const strain = props.strain;
    const { name, type, rating, effects, description, img } = strain;

    const addToSaved = e => {
        e.preventDefault();
        dispatch(addStrainToSaved(strain));
    };

    const removedFromSaved = e => {
        e.preventDefault();
        dispatch(removeStrainFromSaved(strain));
    };

    return (
        <div style={{ border: "1px solid lightgrey", width: "30rem", backgroundColor: 'white', margin: "2% auto", padding: "1%", boxShadow: '3px 5px 3px gainsboro' }}>
        <img src={img} alt="smoke weed erryday" style={{width: '200px', boxShadow: '2px 3px 2px darkslategrey'}}/>
        <h3 style={{paddingTop: '5%'}}>{name}</h3>
        <p>Type: {type}</p>
        <p>Rating: {rating}</p>
        <p>Effects: {effects}</p>
        <p>Description: <br/>{description}</p>
        {props.allowSave && (
            <button onClick={addToSaved}>Add to saved List</button>
        )}
        {props.allowRemove && (
            <button onClick={removedFromSaved}>Remove from saved List</button>
        )}
        </div>
    );
};

export default Strain;