import React from 'react';
import ItemListStyles from './styles';
import linkConfiguration from '../../config';
import Item from '../Item';
import { useLocation } from 'react-router-dom';

const ItemList = () => {
  const location = useLocation();

  return <ItemListStyles.Container>
    { 
      linkConfiguration.map((v,i) => (
        <Item
          key={i}
          title={v.title} 
          Icon={v.Icon} 
          link={v.link}
          isSelected={v.link === location.pathname}
        /> 
      ))
    }
  </ItemListStyles.Container>
}

export default ItemList;