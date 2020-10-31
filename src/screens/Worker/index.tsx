import React from "react";
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
import { findWorkBySpecialty } from '../../redux/actions/WorkerActions';
import { loadingInformationUser } from '../../redux/actions/UserActions';

const Worker = () => {

  const dispatch = useDispatch();
  const { isWorkerSelected } = useSelector( ({worker}) => worker )
  dispatch(loadingInformationUser());  

  return (
    <Content>
      <Header 
        onChange={ (e)=>{ dispatch(findWorkBySpecialty(e.target.value)) }} 
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
