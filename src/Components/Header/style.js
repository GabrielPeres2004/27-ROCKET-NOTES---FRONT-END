import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 105px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700} ;


  display: flex;
  justify-content: space-between;

  padding: 0 80px;

`


export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
  }


  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

  }

`


export const Logout = styled.button`
border: none;
background: none;

> svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
    transition: scale 1s;
} 




`

