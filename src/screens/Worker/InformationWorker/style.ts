import styled , { css } from 'styled-components';

const Content = styled.div`
  display:flex;
  width:500px;
  padding:20px 30px;
  flex-flow:column;
`

const Options = styled.div`
  width:100%;
  height:40px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:15px;
`

const Option = styled.div<{LEFT?:any,RIGHT?:any}>`
  width:49.5%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background:white;
  font-weight:700;
  ${
    ({ LEFT , RIGHT }) => 
    LEFT && css`
      border-radius: 20px 0 0 20px;
    ` ||
    RIGHT && css`
      border-radius : 0 20px 20px 0;
    `
  }

`

const Information = styled.div`
  display:flex;  
  background:white;
  border-radius:20px;
  padding:20px;
`


export {
  Content,
  Options,
  Option,
  Information
}