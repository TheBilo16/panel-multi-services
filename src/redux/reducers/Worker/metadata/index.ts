namespace WorkerController {
  type ToptionSelectedWorker = 'Description' | 'Works'
  
  interface IWork {
    fullname:string,
    state:string,
    price:number,
    description:string,
    descriptionUser:string,
  }

  interface IWorker {
    id : number,
    availability : string,
    basePrice : number,
    specialty : string,
    fullname:string,
    profileImage : string,
    description:string,
    works : Array<IWork>
  }


  export interface IWorkers {
    workers : Array<IWorker>,
    isLoadingInformation : boolean,
    isWorkerSelected:boolean,
    optionSelectedWorker : ToptionSelectedWorker,
    workerSelectedData : IWorker,
    isModalAddOpen : boolean
  }
}

export default WorkerController;