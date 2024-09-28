import styled from "styled-components";

export const Container = styled.textarea`
width: 100%;
height: 150px;

padding: 20px;

border: none;
border-radius: 10px;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
color: ${({ theme }) => theme.COLORS.WHITE} ;

resize: none;

`