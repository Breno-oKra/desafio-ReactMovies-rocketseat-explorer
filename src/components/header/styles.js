import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    grid-area:header;

    height:105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style:solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding:  0 80px;

    > main {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 64px;
    }

`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    //seria o mesmo que div img {} em styled.css
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
    > div{
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-right: 16px;
        line-height: 24px;

        >button {
            background: none;
            border: none;
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
        >strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;