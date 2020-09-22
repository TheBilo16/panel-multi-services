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

const InformationWorkers = () => {

  const dispatch = useDispatch();
  const { optionSelectedWorker } = useSelector( ({worker}) => worker )

  return (
    <Content> 
      <Options>
        <Option 
          LEFT 
          onClick={()=>{ dispatch(updateOptionSelectedWorker('Description')) }}
        > Descripcion </Option>
        <Option 
          RIGHT 
          onClick={()=>{ dispatch(updateOptionSelectedWorker('Work')) }}
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
