import React from 'react';
import LBStyles from './styles';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Footer from './components/Footer';

const LateralBar = () => {
  return <LBStyles.MainContainer>
    <Header />
    <ItemList />
    <Footer />
  </LBStyles.MainContainer>
}

export default LateralBar;