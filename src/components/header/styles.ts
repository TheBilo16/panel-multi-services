import styled from 'styled-components';


const widthIconSearch = '50px';
const widthFind = "40px";
const border = '20px';

const HeaderStyles = {
  content : styled.div`
    display:grid;
    grid-template-columns : max-content max-content;
    grid-template-rows : 50px;
    justify-content:space-between;  
  `,
  search : styled.div`
    min-width:max-content;
    position:relative;
    margin:0 10px 0 0;
  `,
  iconSearch : styled.div`
    width : ${widthIconSearch};
    height : ${widthFind};
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
  `,
  input : styled.input`
    width:450px;
    height:${widthFind};
    padding-left:${widthIconSearch};
    border-radius:${border};
  `,
  date : styled.div`
    display:flex;
    justify-content:center;
    min-width:max-content;
    height:${widthFind};
    border-radius : ${border};
    color:gray;
    background:white;
  `,
  text : styled.p`
    width:max-content;
    height:${widthFind};
    display:flex;
    align-items:center;
    white-space:nowrap;
    padding:0 15px 0 0;
  `,
  iconDate : styled.div`
    width:${widthIconSearch};
    height:${widthFind};
    display:flex;
    justify-content:center;
    align-items:center;
  `
}

export default HeaderStyles;