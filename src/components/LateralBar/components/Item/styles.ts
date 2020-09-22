import styled, { css } from "styled-components";
import color from "../../../../styles/color";

interface ILinkProps {
  isSelected : boolean;
}

const ItemStyles = {
  ContainerIcon : styled.div`
    width: 50px;
    font-size: 1.45em;
    color: #6F6F6F;
    line-height: 0;
  `,
  Icon : styled.span`
    line-height: 0;
  `,
  Text : styled.span`
    width: 150px;
    font-size: 1.22em;
    color: #6F6F6F;
    font-weight: bold;
  `,
  BorderLeft : styled.span`
    width: 6px;
    height: 100%;
    background-color: ${color.main.dark};
    position: absolute;
    left: 0;
    top: 0;
  `,
  Container : styled.div<ILinkProps>` 
    width: 100%;
    padding: 1.3em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover { 
      background-color: rgb(250,250,250);  
    }

    ${({ isSelected }) => isSelected && css`
      background-color: ${color.main.light};

      ${ItemStyles.Text} , ${ItemStyles.ContainerIcon } {
        color: ${color.main.dark};
      }

      &:hover {
        background-color: ${color.main.light}; 
      }
  `}
`
}

export default ItemStyles;