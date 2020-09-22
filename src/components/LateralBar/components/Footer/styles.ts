import styled from "styled-components";
import color from "../../../../styles/color";

const FooterStyles = {
  Container : styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Button : styled.button`
    width: 200px;
    height: 46px;
    border-radius: 23px;
    background-color: ${color.main.dark};
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #FF6565;
    }

    &:active {
      transform: scale(.95);
    }
  `,
  ButtonIcon : styled.span`
    font-size: 1.3em;
    color: #fff;
    line-height: 0;
    margin-right: 8px;
  `,
  ButtonText : styled.span`
    color: #fff;
    font-size: 1.2em;
    font-weight: bold;
  `,
}

export default FooterStyles;