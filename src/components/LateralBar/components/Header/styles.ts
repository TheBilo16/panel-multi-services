import styled from "styled-components";
import color from "../../../../styles/color";

const TitleStyles = {
  Container : styled.div`
    width: 100%;
    text-align: center;
    align-self: center;
  `,
  Text : styled.span`
    font-weight: 900;
    color: ${color.main.dark};
    font-size: 1.8em;
  `
}


export default TitleStyles;