import styled from "styled-components";

const ItemListStyles = {
  Container : styled.div`
    height: 100%;
    overflow: auto; 

    &::-webkit-scrollbar {
      display: none;
    }
  `
}

export default ItemListStyles;