import styled from 'styled-components';

interface IState {
  background : 'red'|'green'
}

const ListStyles = {
  content : styled.div`
    display:flex;
    flex-flow:column nowrap;
    width:max-content;
  `,

  item : {
    content : styled.div`
      display:flex;
      flex-flow:row nowrap;
      margin : 0 0 10px 0;
      width:max-content;
      height:60px;
      align-items:center;
      background:white;
      border-radius:15px;
      padding:0 20px ;
    `,    
    image : styled.img`
      width:40px;
      height:40px;
      margin :0 10px; 
      border-radius:50%;
    `,
    name : styled.p`
      display:flex;
      align-items:center;
      width : 150px;
      height:100%;
      margin:0 5px;
      font-weight:600;
      font-size:17px;
    `,
    state : styled.div<IState>`
      display:flex;
      margin:0 10px;
      width:15px;
      height:15px;
      background:${({background})=>background};
      border-radius:50%;
    `,
    button : styled.div`
      width:30px;
      display:flex;
      align-items:center;
      justify-content:center;
      height:100%;
    `
  }
}


export default ListStyles;