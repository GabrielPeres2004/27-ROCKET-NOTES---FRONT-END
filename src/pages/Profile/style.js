import styled from "styled-components";

export const Container = styled.div`
width: 100%;




`

export const Header = styled.header`
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
width: 100%;
height: 140px;

display: flex;
align-items: center;
padding: 0 124px;

svg {
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    cursor: pointer;

}

a:hover{
    transform: scale(1.1);
}

`

export const Form = styled.form`
max-width: 340px;
margin: 64px auto 0;


div:nth-child(4){
    margin-top: 24px;
}

button{
    margin-top: 24px;
}


`

export const Avatar = styled.div`
position: relative;
width: 186px;
height: 186px;


margin: -124px auto 30px;

img{
    border-radius: 50%;
    width: 186px;
    height: 186px;
    object-fit: cover;
    text-align: center;
    
}

label{
    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    svg{
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        width: 20px;
        height: 20px;
        
    }

    input{
        display: none;
    }
}




`