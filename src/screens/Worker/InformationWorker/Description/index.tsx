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
  const { workerSelected } = useSelector(({worker})=>worker);
 
  return (
    <Content> 
      <ContentImage>
        <Image src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/09/10/15997483923738.jpg'/>
      </ContentImage> 
      <Name> {`${workerSelected.name} ${workerSelected.lastname}`}  </Name>
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
        {  workerSelected.description != undefined ?
          workerSelected.description : "Not a description defined" } 
      </Information>
      <ExtraInformation>
        <Horario>
          <Text TITLE>Horario de atencion</Text>
          <Text TEXT> Lun. a Vier </Text>
        </Horario>
        <PrecioBase>
          <Text TITLE> Precio Inicial / Base </Text>
          <Text TEXT> {workerSelected.basePrice} </Text>
        </PrecioBase>
      </ExtraInformation>
    </Content>
  )
}

export default Description;