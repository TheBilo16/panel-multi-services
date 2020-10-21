import React from 'react'

import {
  Container,
  Title,
  ContainerWorks,
  WorkDetail,
  TitleWork,
  UserWork,
  DescriptionWork,
  PriceWork,
  FechaEmision
} from './style';

//REDUX
import {useDispatch,useSelector} from 'react-redux';
import {} from '../../../../redux/actions/WorkerActions';

const Works = () => {

  const { workerSelectedData } = useSelector(({worker})=>worker);
  const { works } = workerSelectedData;  
  
  return (
    <Container> 
      <Title> {workerSelectedData.specialty} </Title>
      <ContainerWorks>
        <WorkDetail >
          <TitleWork> Titulo por defecto </TitleWork>
          <UserWork> Usuario comun </UserWork>
          <DescriptionWork> Descripcion basica para un usuario </DescriptionWork>
          <FechaEmision> 06/10/2020 </FechaEmision>
          <PriceWork> $15.00 </PriceWork>
        </WorkDetail>  
        <WorkDetail >
          <TitleWork> Titulo por defecto </TitleWork>
          <UserWork> Usuario comun </UserWork>
          <DescriptionWork> Descripcion basica para un usuario </DescriptionWork>
          <FechaEmision> 06/10/2020 </FechaEmision>
          <PriceWork> $15.00 </PriceWork>
        </WorkDetail>  
      </ContainerWorks>
    </Container>
  )
}

export default Works;