import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ;
    main{
        grid-area: 'content';
        overflow-y: auto;
    }
    .tags{
        display: flex;
        align-items: start;
        justify-content: start;
        gap: 24px;
        flex-wrap: wrap;
        background-color:${({theme}) => theme.COLORS.BACKGROUND_900};
        padding: 16px;
        border-radius: 8px;
    }
`

export const Form = styled.form`
    margin: 38px 228px ;

    >header{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;

        margin-bottom: 36px;
        > a{
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.ORANGE};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-bottom: 24px;
        }
    }
    > div{
        display: flex;
        gap: 40px;
        justify-content: space-between;
        margin-bottom:40px ;
    }
`