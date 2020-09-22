import styled from "styled-components";
const Title = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  text-align: center;
  color: #f33737;
  margin-bottom: 20px;
  margin-top: 60px;
`;

const Div = styled.div`
  display: flex;
  width: 100%;

  height: 100%;
  margin: 100px auto 50px auto;
`;

const Container = styled.div`
  margin: auto;
  background: #fff;
  border-radius: 30px;
  border: 1px solid rgba(51, 51, 51, 0.1);
  width: 451.44px;
  height: 407.46px;
  box-shadow: 0px 0px 0px 0px;
`;

const DivInputsType = styled.input`
  width: 285px;
  height: 50px;
  left: 561.44px;
  top: 453.86px;
  background: #e8f0fe;
  border-radius: 0px 25px 25px 0px;
  margin-bottom: 20px;
  border: none;
  outline: none;
`;

const DivButton = styled.button`
  background: #f33737;
  width: 315px;
  color: #fff;
  height: 50px;
  border-radius: 23px;
  border: none;
  outline: none;
  margin: auto;
`;

const Icon = styled.div`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  margin-bottom: 20px;
  background: #e8f0fe;
  border-radius: 25px 0px 0px 25px;
  padding: 10px;
`;
const Stldiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Stlform = styled.form`
  width: 100%;
  height: 200px;
  padding: 0 2.5em;
  display: grid;
  grid-gap: 5px;
`;
export {
  Title,
  Div,
  Container,
  DivInputsType,
  DivButton,
  Icon,
  Stldiv,
  Stlform,
};
