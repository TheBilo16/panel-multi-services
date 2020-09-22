import styled , { css } from 'styled-components';

const widthCeld = '190px';

interface IRegister {
  border : string,
  margin? : string,
  HEADER? : any,
  BODY? : any
}



const Content = styled.div`
  height:90vh;
`

const Title = styled.p`
  padding:20px;
  font-weight : 700;
  font-family:Roboto;
  font-size:25px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`


// Row and Celds 

const Register = styled.div<Partial<IRegister>>`
  display: flex;
  flex-flow:row no-wrap;
  border-radius : ${ props => props.border ? props.border : '' };
  margin : ${props=>props.margin ? props.margin : ''};
  background-color : white;
  ${ props => 
      props.HEADER && css`
        font-size:15px;
        font-weight:500;
      `
  }
  ${
    props => 
      props.BODY && css`
        color:gray;
        font-size:14px;
        font-weight:400;
      `
  }
`

const Celd = styled.div`
  width:160px;
  height: 50px;
  display: flex;
  justify-content:center;
  align-items:center;
  background:transparent;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const ImageUser = styled.img`
  border-radius:50%;
  width:30px;
  height:30px;
`

export {
  Content,
  Title,
  Register,
  Celd,
  ImageUser
}