import styled from "styled-components";

export const Container = styled.section`
margin-block: 28px ;

 h2{
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-size: 20px;
    font-weight: 400;
 }

`