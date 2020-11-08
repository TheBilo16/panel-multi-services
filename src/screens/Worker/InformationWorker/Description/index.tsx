import React from 'react'

//DESIGN
import DescriptionStyles from './style'
import { FaStar , FaTrash} from 'react-icons/fa';

//HOOKS
import useWorkerHook from '../../../../Hooks/Worker/workerHook';

const Description = () => {

  const {
    workerSelectedData,
    removeWorker
  } = useWorkerHook();

  return (
    <DescriptionStyles.content> 
      <DescriptionStyles.contentImage>
        <DescriptionStyles.image src={workerSelectedData.profileImage}/>
      </DescriptionStyles.contentImage> 
      <DescriptionStyles.name> {workerSelectedData.fullname}  </DescriptionStyles.name>
      {/* <DescriptionStyles.contentPuntuacion>
        <DescriptionStyles.puntuacion>
          <DescriptionStyles.star><FaStar color='blue' size={15} /></DescriptionStyles.star>
          <DescriptionStyles.star><FaStar color='blue' size={15} /></DescriptionStyles.star>
          <DescriptionStyles.star><FaStar color='blue' size={15} /></DescriptionStyles.star>
          <DescriptionStyles.star><FaStar color='blue' size={15} /></DescriptionStyles.star>
          <DescriptionStyles.star><FaStar color='blue' size={15} /></DescriptionStyles.star>
        </DescriptionStyles.puntuacion>
      </DescriptionStyles.contentPuntuacion>  */}
      <DescriptionStyles.information> 
        {  workerSelectedData.description !== undefined ?
          workerSelectedData.description : "Not a description defined" } 
      </DescriptionStyles.information>
      <DescriptionStyles.contentExtraInformation>
        <DescriptionStyles.extraInformation>
          <DescriptionStyles.text TITLE>Horario de atencion</DescriptionStyles.text>
          <DescriptionStyles.text TEXT> Lun. a Vier </DescriptionStyles.text>
        </DescriptionStyles.extraInformation>
        <DescriptionStyles.extraInformation>
          <DescriptionStyles.text TITLE> Precio Inicial / Base </DescriptionStyles.text>
          <DescriptionStyles.text TEXT> {workerSelectedData.basePrice} </DescriptionStyles.text>
        </DescriptionStyles.extraInformation>
      </DescriptionStyles.contentExtraInformation>
      <DescriptionStyles.buttonDelete
        onClick={()=>{removeWorker(workerSelectedData.id)}}
      >
        <FaTrash 
          size={13}
          color='white'
        />
        <DescriptionStyles.text margin='0 0 0 5px' sizeText='13px'> Remover de trabajador </DescriptionStyles.text>
      </DescriptionStyles.buttonDelete>
    </DescriptionStyles.content>
  )
}

export default Description;