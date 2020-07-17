import React from "react";
import Strains from "./Strains";
import SavedStrainsList from "./SavedStrainsList";
import { Col, Row, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

import styled from "styled-components";

const RecsLayout = styled.div`
  /* display: flex; */
`;

const StrainRecs = props => {
    const routeChange = e => {
        e.preventDefault();
        let path = "/dashboard";
        props.history.push(path);
    };

    return (
        <RecsLayout>
        <Row>
            <Col xs={5}>
            <h2>Recommendations</h2>
            <Strains allowRemove={true}/>
            </Col>
            <Col xs={6}>
            <SavedStrainsList />
            </Col>
            <Col xs={1}>
            <Button onClick={routeChange} className="CustomButtonFilled ContinueButton">Continue</Button>
            </Col>
        </Row>
        </RecsLayout>
    );
};
export default StrainRecs;