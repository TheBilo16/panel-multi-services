import React , {useEffect} from "react";
import {
  Content,
  ContentInformation
} from "./styles";

//
import Header from "../../components/header";
import List from './List';
import InformationWorker from './InformationWorker';

//REDUX
import { useDispatch,useSelector } from 'react-redux';
import { loadingWorkers } from '../../redux/actions/WorkerActions';

import { FaPlusCircle } from "react-icons/fa";

const Worker = () => {

  const { isLoadingInformation , isWorkerSelected } = useSelector( ({worker}) => worker )
  const dispatch = useDispatch();

  useEffect(()=>{
    if (!isLoadingInformation) dispatch(loadingWorkers())
  })

  return (
    <Content>
      <Header 
        onChange={()=>{console.log('FindWorker')}}
      />
      <ContentInformation>
        <List />
        {
          isWorkerSelected?
          <InformationWorker /> 
          : <></>
        }
      </ContentInformation>
    </Content>
  );
}

export default Worker;
