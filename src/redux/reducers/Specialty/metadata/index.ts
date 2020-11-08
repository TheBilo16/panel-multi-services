namespace ControllerSpecialty {
  interface ISpecialty {
    name:string,
    image:string,
    id:number
  }
  export interface ISpecialtys {
    specialtys:Array<ISpecialty>,
    loadingInformation:boolean,
    specialtySelectedData : ISpecialty
  }
}

export default ControllerSpecialty;