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
        {
          works.map((e,i)=>{
            return (
              <WorkDetail key={i}>
                <TitleWork> Titulo por defecto </TitleWork>
                <UserWork> {e.username} </UserWork>
                <DescriptionWork> {e.description} </DescriptionWork>
                <FechaEmision> 06/10/2020 </FechaEmision>
                <PriceWork> {e.price} </PriceWork>
              </WorkDetail>
            )
          })
        }
      </ContainerWorks>
    </Container>
  )
}

export default Works;