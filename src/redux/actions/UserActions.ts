import { baseUrl , user_image_default_route } from '../../config';

const TYPES = {
  UPDATE_STATE_USER : 'update-state-user',
  CHANGE_LOADING_INFORMATION : 'change-loading-information'
}

// Configs 

const configFetch = (method:string,body:object) => ({
  method,
  body : JSON.stringify(body),
  headers : {
    'Content-Type': 'application/json'
  }
  // .....
})

const formatUsers = (users) => {
  let usersSend = users.map( user => {
    return ({
        id : user.id,
        fullname : user.fullname,
        username : user.username,
        password : user.password,
        profileImage : user.profileImage||user_image_default_route,
        district : user.district.name
      })
    })
  return usersSend;
}

// Actions 


export const updateStateUser = payload => ({ 
  type : TYPES.UPDATE_STATE_USER,
  payload
});

export const changeLoadingInformation = (payload : boolean) => ({
  type : TYPES.CHANGE_LOADING_INFORMATION,
  payload
})


// ACTIONS THUNKS

export const findByUserName = (fullname:string) => async dispatch => {

    try {
      if (!fullname) { 
        dispatch(loadingInformationUser()); 
        return;
      } 
      let config = configFetch('post',{fullname});
      const users = await (await fetch(`${baseUrl}/user/filterByName`,config)).json()
      if (users.length > 0) {
        console.log('buscando')
        let usersSend = formatUsers(users);
        dispatch(updateStateUser(usersSend))
      } else {
        
      } 

    }catch(e){
      console.log(e.message);
    }
    
}

export const loadingInformationUser = () => async dispatch => {
  try {
    //Request the api
    const users = await (await fetch(`${baseUrl}/user`)).json();

    //Format User Information
    let usersSend = formatUsers(users);
    //Updating information
    dispatch(updateStateUser(usersSend)); // Actualizar el usuario a una lista completa.
    dispatch(changeLoadingInformation(true)); // Informacion cargada.

  } catch (e) { console.log(e.message) }
}

export default TYPES;