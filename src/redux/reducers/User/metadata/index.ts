namespace UserController {
  interface IUser {
    id:number,
    fullname:string,
    username:string,
    password:string,
    description:string,
    profileImage:string,
    district:string
  }
  export interface IUsers {
    users : Array<IUser>,
    isLoadingInformationUser : boolean
  }
}

export default UserController;