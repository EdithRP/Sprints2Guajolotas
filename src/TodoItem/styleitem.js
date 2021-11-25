
import styled from "styled-components";

export const Item = styled.div`
   background-color: white;
  display: flex;
  direction:column;
  height: 112px;
  width: 100%;
  cursor: pointer;
  margin-top: 24px;
  margin-right: 24px;
  border-radius: 30px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);
  padding: 16px;
`



export const Todoitem = styled.div`
 
 display: flex;

  background-color: white;

  margin:  auto;

& img{
  margin-right: 16px;
  align-items: left;

}


  `

export const Nombreproducto= styled.li`
font-size: 17px;
    font-weight: 600;
    margin: 0 0 1rem 0;
  font-weight: bold;
  font-family:Arial;

`
export const Precio= styled.li`
      font-size: 14px;
    font-weight: 600;
    margin: 0;
   color:#FA4A0C;

  
`

export const Parrafo= styled.div`
justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 34px;
  padding: 1em 0;
  margin: 0 auto;
  
  text-align: left;
`

export const Search = styled.input`
  border-radius: 30px;
  border-color: gray;
  height: 60px;
  width: 312px;
  font-size: 17px;
  padding-left: 15px;
  margin: 0 auto;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;


export const Categorias = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0 10px 0;
  height: 60px;
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 17px;
  color: #9a9a9d;
  height: 30px;

  &:hover {
    border-bottom: 2px solid #fa4a0c;
    color: #fa4a0c;
  }
`;
