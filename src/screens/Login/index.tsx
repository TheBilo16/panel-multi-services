import React from "react";

//DESIGN
import UserStyles from "./styles";
import { FaUser, FaLock } from "react-icons/fa";

//HOOKS
import useLoginHook from '../../Hooks/Login/LoginHook';

const Login = () => {

  const {
    authentication
  } = useLoginHook();

  return (
    <UserStyles.div>
      <UserStyles.container>
        <UserStyles.title>Multi Servicios</UserStyles.title>

        <UserStyles.stlform encType='multipart/form-data' onSubmit={authentication}>
          <UserStyles.stldiv>
            <UserStyles.icon>
              <FaUser />
            </UserStyles.icon>
            <UserStyles.divInputsType 
              type="text" 
              placeholder="Username..."
              name = 'username' 
            />
          </UserStyles.stldiv>

          <UserStyles.stldiv>
            <UserStyles.icon>
              <FaLock />
            </UserStyles.icon>
            <UserStyles.divInputsType
              type="password"
              placeholder="Password..."
              name = 'password'
            />
          </UserStyles.stldiv>
          <UserStyles.divButton as = 'input' type="submit" value='Iniciar Session' />
        </UserStyles.stlform>
      </UserStyles.container>
    </UserStyles.div>
  );
};



export default Login;
