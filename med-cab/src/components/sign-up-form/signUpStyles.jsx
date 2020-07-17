import styled from 'styled-components';


export const Register = styled.div` *{ for sign up}*
    display: flex;
      justify-content: center;
     align-items: center;
     flex-direction: column;
    background-color:#66878a;
     background-repeat: repeat;
     background-size: 100%;
     border: 1px solid black;
    flex-wrap: wrap;
     width: 30%;
      height: 20%;
    margin: 25% auto;
    font-size: 20px;
    color: white; 
    opacity: 0.9;
    z-index: 1;
    padding: 20px ;
    width: 50%;
    box-shadow: 15px 18px 15px black;
`;

export const SignInLink = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    color: blue;
    text-decoration: underline;
    // background-color black;
    width: 100%;
    padding-top: 1em;
    font-size:25px;
`;

export const Errors = styled.p`
    font-weight: 900;
    margin: 1em 0;
    size: 2rem;
    color: white;
    font-family: "Assistant", sans-serif;
    
`;

export const Heading = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-family: "Courgette", cursive;
    color: white;
    padding: 0 1em;
    background-color: yellow;
`;

export const FormContainer = styled.div` *{ for log in}*
     //background: yellow;
    z-index: 1;
    padding: 4.5em;
    max-width: 100%;
  
`;

export const HeadingContainer = styled.div` *{ for log in}*
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: black;
    width: 100%;
`;
