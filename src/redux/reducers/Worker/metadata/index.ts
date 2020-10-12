namespace WorkerController {
  type ToptionSelectedWorker = 'Description' | 'Works'
  
  interface IWork {
    state:string,
    price:number,
    description:string,
    username:string,
    userlastname:string,
    descriptionUser:string,
  }

  interface IWorker {
    id : number,
    availability : string,
    location : string , //En ver
    basePrice : number,
    specialty : string,
    name : string,
    lastname : string,
    profileImage : string,
    description:string,
    works : Array<IWork>
  }


  export interface IWorkers {
    workers : Array<IWorker>,
    isLoadingInformation : boolean,
    isWorkerSelected:boolean,
    optionSelectedWorker : ToptionSelectedWorker,
    workerSelectedData : IWorker
  }
}

export default WorkerController;