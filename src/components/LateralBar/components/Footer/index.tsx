import React from 'react';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import FooterStyles from './styles';

//REDUX
import { useDispatch } from 'react-redux';
import { updateAuthenticationState } from '../../../../redux/actions/AuthActions';

const Footer = () => {
  const dispatch = useDispatch();
  const closeSession = () => {
    localStorage.clear();
    dispatch(updateAuthenticationState(false))
  }

  return <FooterStyles.Container>
    <FooterStyles.Button>
      <FooterStyles.ButtonIcon>
        <BsFillCaretLeftFill />
      </FooterStyles.ButtonIcon>
      <FooterStyles.ButtonText onClick={closeSession}>Cerrar Sesion</FooterStyles.ButtonText>
    </FooterStyles.Button>
  </FooterStyles.Container>
}

export default Footer;