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

//HOOKS
import useWorkerHook from '../../../../Hooks/Worker/workerHook';

const Works = () => {
    
  const {
    workerSelectedData
  } = useWorkerHook();
  const { works } = workerSelectedData;  

  return (
    <Container> 
      <Title> {workerSelectedData.specialty} </Title>
      <ContainerWorks>
        {
          works.map((work,i)=>{
            return <WorkDetail key={i}>
              <TitleWork>{work.fullname}</TitleWork>
              <UserWork> {work.descriptionUser} </UserWork>
              <DescriptionWork> {work.description} </DescriptionWork>
              <FechaEmision> 06/10/2020 </FechaEmision>
              <PriceWork> {work.price} </PriceWork>
            </WorkDetail>
          })
        }
      </ContainerWorks>
    </Container>
  )
}

export default Works;