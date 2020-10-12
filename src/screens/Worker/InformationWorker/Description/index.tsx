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
import {  } from '../../../../redux/actions/WorkerActions';

const Description = () => {

  const dispatch = useDispatch();
  const { workerSelectedData } = useSelector(({worker})=>worker);
 
  return (
    <Content> 
      <ContentImage>
        <Image src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/09/10/15997483923738.jpg'/>
      </ContentImage> 
      <Name> {`${workerSelectedData.name} ${workerSelectedData.lastname}`}  </Name>
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