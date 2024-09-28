
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;

  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }


`

export const Links = styled.ul`
list-style: none;

li {
    margin-bottom: 12px;


    
    a {
        color: ${({ theme }) => theme.COLORS.WHITE} ;
    }
} 
`
export const Content = styled.div`
display: flex;
flex-direction: column;
max-width: 550px;
margin-inline: auto;


button:first-child {
  align-self: self-end;
  color: ${({ theme }) => theme.COLORS.ORANGE};
}

h1 {
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 16px;
}


p {
    text-align: justify;
}

`



