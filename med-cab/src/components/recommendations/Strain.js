import React from 'react';
import { useDispatch } from 'react-redux';
import { addStrainToSaved, removeStrain } from '../../store/actions';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Col,
    Row
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

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
        removeStrain(strain);
    };

    return (
        <Card className="Temp">
        <Row noGutters>
            <Col md={4}>
            <CardImg top height="100%" src={img} alt="Card image cap" />
            </Col>
            <Col md={8}>
            <CardBody>
                <CardTitle style={{fontSize:'1.6rem'}}>{name}<span style={{fontSize:'1.4rem'}}> - {type} - {rating}</span></CardTitle>
                <CardSubtitle>{effects}</CardSubtitle>
                <CardText>{description}</CardText>
                {props.allowSave && <Button onClick={addToSaved} className="CustomButtonOutline">Save</Button>}
                {props.allowRemove && <Button onClick={removedFromSaved} className="CustomButtonOutline">Delete</Button>}
            </CardBody>
            </Col>
        </Row>
        </Card>
    );
};

export default Strain;

