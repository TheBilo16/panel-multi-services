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
import {useSelector} from 'react-redux';

const Works = () => {

  const { workerSelectedData } = useSelector(({worker})=>worker);
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