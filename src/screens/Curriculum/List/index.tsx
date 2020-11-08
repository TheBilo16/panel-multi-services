import React from 'react';

//DESIGN
import ListStyles from './style';
import {FaAngleRight} from 'react-icons/fa';

//HOOKS
import useCurriculumHook from '../../../Hooks/Curriculum/curriculumHook';

const List = () => {

  const {
    curriculumsData,
    changeSelectedData,
    changeStateSelectedData
  } = useCurriculumHook();


  return (
    <ListStyles.content>
      {
        curriculumsData.map( (e,i)=>{
          return (
            <ListStyles.item.content key={i}>
              <ListStyles.item.image src={e.imageUser} />
              <ListStyles.item.name> {e.usuario} </ListStyles.item.name>
              {
                e.state == 'in-wait' 
                ? <ListStyles.item.state background='red'></ListStyles.item.state>
                : <ListStyles.item.state background='green'></ListStyles.item.state>
              }
              
              <ListStyles.item.button>
                <FaAngleRight 
                  size={20} 
                  color='gray' 
                  onClick={()=>{
                    changeStateSelectedData(true);
                    changeSelectedData(e);
                  }}
                />
              </ListStyles.item.button>
            </ListStyles.item.content>
          )
        } )
      }
    </ListStyles.content>
  )
}

export default List;