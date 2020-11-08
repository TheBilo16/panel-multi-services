import React from 'react'
import {
  Content,
  Options,
  Option,
  Information
} from './style';

//REDUX
import { useSelector , useDispatch } from 'react-redux';
import { updateOptionSelectedWorker } from '../../../redux/actions/WorkerActions';

//COMPONENTS
import Description from './Description';
import Works from './Works';

//HOOKS
import useWorkerHook from '../../../Hooks/Worker/workerHook';

const InformationWorkers = () => {

  const {
    optionSelectedWorker,
    changeOptionSelectedWorker
  } = useWorkerHook();

  return (
    <Content> 
      <Options>
        <Option 
          LEFT 
          onClick={()=>{ changeOptionSelectedWorker('Description') }}
        > Descripcion </Option>
        <Option 
          RIGHT 
          onClick={()=>{ changeOptionSelectedWorker('Work') }}
        > Trabajos </Option>
      </Options>
      <Information>
        { optionSelectedWorker === 'Description' 
          ? <Description />
          : <Works />
        }
      </Information>
      
    </Content>
  )
}

export default InformationWorkers;
