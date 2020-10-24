import React from 'react'

//Stlyes
import {
  Content,
  ContentImage,
  Image,
  Name,
  ContentPuntuacion,
  Puntuacion,
  Star,
  Information,
  ExtraInformation,
  Horario,
  PrecioBase,
  Text
} from './style'
import { FaStar } from 'react-icons/fa';

//REDUX 
import { useDispatch , useSelector } from 'react-redux';

const Description = () => {

  const { workerSelectedData } = useSelector(({worker})=>worker);

  return (
    <Content> 
      <ContentImage>
        <Image src={workerSelectedData.profileImage}/>
      </ContentImage> 
      <Name> {workerSelectedData.fullname}  </Name>
      <ContentPuntuacion>
        <Puntuacion>
          <Star><FaStar color='blue' size={15} /></Star>
          <Star><FaStar color='blue' size={15} /></Star>
          <Star><FaStar color='blue' size={15} /></Star>
          <Star><FaStar color='blue' size={15} /></Star>
          <Star><FaStar color='blue' size={15} /></Star>
        </Puntuacion>
      </ContentPuntuacion> 
      <Information> 
        {  workerSelectedData.description != undefined ?
          workerSelectedData.description : "Not a description defined" } 
      </Information>
      <ExtraInformation>
        <Horario>
          <Text TITLE>Horario de atencion</Text>
          <Text TEXT> Lun. a Vier </Text>
        </Horario>
        <PrecioBase>
          <Text TITLE> Precio Inicial / Base </Text>
          <Text TEXT> {workerSelectedData.basePrice} </Text>
        </PrecioBase>
      </ExtraInformation>
    </Content>
  )
}

export default Description;