import styled from "styled-components";
import backgrounImg from "../../assets/background.jpeg"
export const Container = styled.div`
    height: 100vh;
    display: flex;

    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: center;

    > h1{
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }
    >p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    > a{
        width: 100%;
        margin-top: 124px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
    
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgrounImg}) no-repeat center center;
    background-size: cover;
    filter: grayscale(90%);

`