import React , { FC } from 'react';
import NSLateralBar from '../../metadata';
import { Link } from 'react-router-dom';
import IStyles from './styles';

const Item : FC<NSLateralBar.ItemProps> = ({ title , Icon , link , isSelected  }) => {
  return <IStyles.Container as={Link} to={link}>
    <IStyles.ContainerIcon>
      <IStyles.Icon>
        <Icon />
      </IStyles.Icon>
    </IStyles.ContainerIcon>
    <IStyles.Text>{title}</IStyles.Text>
    { isSelected && <IStyles.BorderLeft /> }
  </IStyles.Container>
}

Item.defaultProps = {
  isSelected : false
}

export default Item;