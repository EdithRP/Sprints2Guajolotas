import styled from "styled-components";


export const Todosearch = styled.input`
background: #FFFFFF;
  border-radius: 2px;
  border: 2px solid #e6ecf8;
  margin: 5% 5%;
  height: 55px;
  width: calc(100% - 30%);
  font-size: 15px;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 400;
  border-radius: 40px;
  color: #1E1E1F;
  -webkit-transition: border-color .2s ease;
  transition: border-color .2s ease;


  ::placeholder {
  color: #A5A5A5;
  font-family: 'Montserrat';
  font-weight: 400;
}

:focus {
  outline-color: #687c81;
}


`

export const Search = styled.div`
 padding-left: 4%;

 i {
  background-color: #f2f2f2;
  border: 2px solid #e6ecf8;;
  border-radius: 25px 0 0 25px;
  border-right: 0;
  color: #777;
  margin-top:5%;
  padding: 0.97rem .95rem;
  -webkit-transition: border-color .2s ease;
  transition: border-color .2s ease;
  position:absolute;
}
`
export const Texto = styled.p`
 font-weight: bold;
 margin-top:6.5%;
 `

export const Contenedor = styled.div`
display:flex;
flex-direction: row;
`

export const Buscador = styled.div`

color:black;
align-items:center;
margin: 10% 40%;

.logobuscador{
width:100px;
height:100px;
color:#9A9A9D;
}
`

export const Textoloading = styled.h4`

display: flex;

`