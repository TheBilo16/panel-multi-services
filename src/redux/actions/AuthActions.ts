import { baseUrl } from '../../config';

const TYPES = {
  SET_AUTHENTICATION_STATE: "set-authentication-state",
};

export const updateAuthenticationState = (isAuthenticated: boolean) => ({
  type: TYPES.SET_AUTHENTICATION_STATE,
  payload: isAuthenticated,
});


export const checkAuthenticationState = () => async (dispatch) => {
  try {
    //Comprobar si el token caduco
    let token = localStorage.getItem('token');
    let config = {
      method:'post',
      body: JSON.stringify({ token }),
      headers : {
        'Content-Type': 'application/json'
      }
    } 
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
