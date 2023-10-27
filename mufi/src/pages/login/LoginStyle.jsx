import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  text-align: center;
  width: 390px;
  height: 100vh;
  background-color: #000;
  margin: auto;
  overflow: hidden;
  border-radius: 16px;
`; 

export const Title = styled.h2`
  font-size: 24px;
  color: #fff;
  margin: 0 auto 12px;
  margin-bottom: 40px;
`;

export const InputGroup = styled.div`
 
  width: 100%;
  max-width: 300px;
  text-align: left;
    margin-left: 34px;
`;


export const Input = styled.div`
  margin-top: -10px;
  font-size: 12px;
  color: #eb5757;
  margin-left: 10px;
`;

export const Label = styled.label`
  margin-bottom: 15px;
  font-size: 12px;
  color: #767676;
  text-align: left;
`;


export const ErrorMessage = styled.div`
  font-size: 12px;
  color: #eb5757;
  margin-bottom: 30px;
`;

export const LoginButton = styled.button`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  background-color: #2033E7;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const EmailJoin = styled(Input)`
 font-size: 12px;
  color: #767676;
  margin-top: 20px;
  width: 100%;
  text-align: center;
`

