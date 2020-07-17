import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import SavedStrainsList from '../recommendations/SavedStrainsList';
import AppFooter from './AppFooter';

import styled from 'styled-components';

const Saved = styled.div`
    marginTop: '5%
`;

const Cont = styled.div`
    marginLeft: '5%'
`;

const Foot = styled.div`
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: '5%',
    marginLeft: '50%'
`;

const BigButt = styled.div`
    display: 'flex',
    justify-content: 'center',
    align-content: 'center'
`;

const Display = (props) => {
    const routeChange = (e) => {
        e.preventDefault();
        let path = "/strainform";
        props.history.push(path);
    };

    return (
        <div>
            <Row>
                <Cont>
                    <Col>
                        <Saved className="savedcont">
                            <SavedStrainsList allowSearch />
                        </Saved>
                        <BigButt className='big-butt'>
                            <Button
                                type='submit'
                                className="CustomButtonFilled"
                                onClick={routeChange}
                            >
                                Find New Strains!
                            </Button>
                        </BigButt>
                    </Col>
                </Cont>
            </Row>
            <Foot>
                <AppFooter />
            </Foot>
        </div>
    );
};

export default Display;