namespace CurriculumController {

  type state = 'in-wait' | 'ok';
  interface ICurriculum {
    id : number,
    usuario : string,
    specialty : string,
    title : string,
    content : string,
    fecha_emision : Date,
    state : state,
    imageUser : string,
    phone : string,
    email : string
  } 
  export interface ICurriculums {
    curriculums : Array<ICurriculum>,
    curriculumSelected : boolean,
    loadingInformation : boolean;
    curriculumSelectedData : ICurriculum
  }
}

export default CurriculumController;