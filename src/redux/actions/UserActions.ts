import { baseUrl } from '../../config';

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
  let usersSend : [object] = users.map((user,i)=>{
      return ({
        id : user.id,
        fullname : user.fullname,
        username : user.username,
        password : user.password,
        profileImage : user.profileImage,
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

export const findByUserName = (name:string) => async dispatch => {

    if (!name) { dispatch(loadingInformationUser()); return } 

    let config = configFetch('post',{name});
    const users = await (await fetch(`${baseUrl}/user/filter`,config)).json()

    if (users.length > 0) {
      let usersSend = formatUsers(users);
      dispatch(updateStateUser(usersSend))
      console.log(usersSend);
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