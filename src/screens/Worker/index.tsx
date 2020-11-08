import React from "react";
import {
  Content,
  ContentInformation
} from "./styles";

//
import Header from "../../components/header";
import List from './List';
import InformationWorker from './InformationWorker';

//HOOKS
import useWorkerHook from '../../Hooks/Worker/workerHook';


const Worker = () => {
  
  const {
    isWorkerSelected,
    findWorker,
  } = useWorkerHook();

  return (
    <Content>
      <Header 
        onChange={(e)=>{ findWorker(e.target.value) }} 
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
