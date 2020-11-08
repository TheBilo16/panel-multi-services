import { baseUrl } from '../../config';

const TYPES = {
  SET_AUTHENTICATION_STATE: "set-authentication-state",
};

type data = FormData | object;

//CONFIGS
const configFetch = (method,data:data) => {

  return ({
    method,
    body : JSON.stringify(data),
    headers : {
      'Content-Type': 'application/json'
    }
  })

}


//ACTIONS
export const updateAuthenticationState = (isAuthenticated: boolean) => ({
  type: TYPES.SET_AUTHENTICATION_STATE,
  payload: isAuthenticated,
});

//ACTION THUNKS

export const validationUser = (data:FormData) => async(dispatch) => {

  const { token } = await (await fetch(`${baseUrl}/auth/login`, {
    method:'post',
    body: data
  })).json();
  
  if (token){
    dispatch(updateAuthenticationState(true));
    localStorage.setItem('token',token);
  } else alert('El correo o la contrase es incorrecta')
}

export const checkAuthenticationState = () => async (dispatch) => {
  try {
    //Comprobar si el token caduco
    let token = localStorage.getItem('token');
    let config = configFetch('post',{token});
    const { isExpired , error , message} = await (await fetch(`${baseUrl}/auth/token/check`,config)).json();

    // Comprobaciones
    if (error) alert(error) // Error al ejecutar
    else if (message) alert(message) // No hay token
    else if ( isExpired ) { //Ha caducado
      console.log('Session expirada')
      localStorage.clear()
      dispatch(updateAuthenticationState(false))
    }
    else dispatch(updateAuthenticationState(true)) // Si hay token activo

  } catch (e) {
    console.log(e);
  }
};

export default TYPES;
