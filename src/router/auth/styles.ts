import styled from "styled-components";

const RouterStyles = {
  Container : styled.div`
    display: grid;
    grid-template-columns: 350px 1fr;
  `,
  OverflowContainer : styled.div`
    width: 100%;
    height: 100vh;
    overflow: auto;
  `
}

export default RouterStyles;