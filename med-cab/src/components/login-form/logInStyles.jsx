import styled from 'styled-components';
///import FormBackground from '../../images/formBackground.jpg';

export const SignIn = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
   
    background-repeat: repeat;
    background-size: 100%;
    text-align: center;
    border: 3px solid black;
    width: 40%;
    max-width: 100%;
    margin: 25% auto;
    box-shadow: 5px 8px 5px black;

    @media (max-width: 1254px) {
        width: 60%;
    }

    @media (max-width: 812px) {
        width: 100%;
    }

`;

export const FormContainer = styled.div`
    background: rgba(255,255,204, 0.1);
    z-index: 2;
    // display:flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    //flex-wrap: wrap;
   
   // background-repeat: repeat;
    // background-size: 80%;
    //text-align: center;
    // border: 2px solid black;
    //width: 90%;
    // background-color: blue;
    color:white;
    opacity: 0.8;
`;

export const RegisterLink = styled.div`
    display:flex;
    justify-content: space-around;
    text-align: center;
    font-size: 25px;
    color: white;
    // background-color black;

`;

export const Errors = styled.p`
    font-weight: 700;
    margin: 1em 0;
    size: 3rem;
    color: red;
    font-family: "Assistant", sans-serif;
`;

export const Heading = styled.h1`
    text-align: center;
    font-size 4.8rem;
    font-family: "Courgette", cursive;
    color: white;
    // padding: 0 1em;
    
    
`;

export const FormLinks = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: black;
    color: white;
    width: 100%;
    max-width: 100%;
    padding-top: 1.5em
    text-decoration: underline;
    // font-size: 50px;
`;

