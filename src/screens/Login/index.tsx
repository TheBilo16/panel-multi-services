import React , { useRef } from "react";
import {
  Title,
  Div,
  Container,
  DivInputsType,
  DivButton,
  Icon,
  Stldiv,
  Stlform,
} from "./styles";
import { FaUser, FaLock } from "react-icons/fa";

//
import { baseUrl } from '../../config';

//REDUX
import { useDispatch } from 'react-redux';
import { updateAuthenticationState } from '../../redux/actions/AuthActions';

const Login = () => {

  const username : any = useRef();
  const password : any = useRef();
  const dispatch = useDispatch();

  const autentication = async () => {

    const data = { 
      username : username.current.value,
      password : password.current.value
    }

    const config = {
      method : 'POST',
      body : JSON.stringify(data),
      headers : {
        'Content-Type': 'application/json'
      }
    }

    const { token } = await (await fetch(`${baseUrl}/auth/login`, config )).json();

    if (token){
      dispatch(updateAuthenticationState(true))
      saveToken(token)
    } else console.log('El correo o la contrase es incorrecta')
  }

  const saveToken = (token) => localStorage.setItem('token',token)
  return (
    <Div>
      <Container>
        <Title>Multi Servicios</Title>

        <Stlform >
          <Stldiv>
            <Icon>
              <FaUser />
            </Icon>
            <DivInputsType 
              name="user" 
              type="text" 
              placeholder="Username..." 
              ref={username}
            />
          </Stldiv>

          <Stldiv>
            <Icon>
              <FaLock />
            </Icon>
            <DivInputsType
              name="clave"
              type="password"
              placeholder="Password..."
              ref={password}
            />
          </Stldiv>
          <DivButton type="button" onClick={autentication} > Iniciar Sesión </DivButton>
        </Stlform>
      </Container>
    </Div>
  );
};



export default Login;
