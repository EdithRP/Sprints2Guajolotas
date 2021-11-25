import styled from 'styled-components'
export const StyleContainer= styled.div`
/* border: 1px solid red; */
display:flex;
flex-direction: column;
justify-content:center ;
align-items: center;

`

export const StyleCard = styled.button`
 width:312px;
  height: 69px;
  border-radius: 40px;
  display:block;
  margin: 0 auto;
  background-color:#FA4A0C;
  border: none;
  font-weight: 600;
  font-size:1rem;
  color: #FFFF;
  margin-top: 190px;
  position: fixed;
  bottom: 10px;
cursor:pointer;
/* border: 1px solid red; */
`
export const StyleDescripcion = styled.div`
/* border: 1px solid red; */

margin-left: 20px;

.nombre{
    font-size:1rem;
    font-weight: 600;
    color:#0D0D0D;
    margin-bottom: 8px;
}
.precio{
    font-size: .9rem;
    color:#FA4A0C;
    font-weight: 600;
    text-transform: uppercase;
}
`