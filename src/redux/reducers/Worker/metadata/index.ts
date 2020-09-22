namespace WorkerController {
  type ToptionSelectedWorker = 'Description' | 'Works'
  
  interface IWorker {
    id : number,
    availability : string,
    location : string , //En ver
    basePrice : number,
    specialty : string,
    name : string,
    lastname : string,
    profileImage : string,
    description:string
    //...Works...
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