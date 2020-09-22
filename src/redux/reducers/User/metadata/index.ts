namespace UserController {
  interface IUser {
    id:number,
    name:string,
    lastname:string,
    username:string,
    password:string,
    description:string,
    profileImage:string,
    district:string
  }
  export interface IUsers {
    users : Array<IUser>,
    isLoadingInformation : boolean
  }
}

export default UserController;