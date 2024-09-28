import styled from "styled-components";

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;
`

export const Form = styled.form`
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;
text-align: center;

padding: 0 136px;



h1{
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
}

p{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
}

h2{
    font-size: 24px;
    margin-block: 48px;
}


a{
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-top: 124px;

}

`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`