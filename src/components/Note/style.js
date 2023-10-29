import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  padding: 32px;
  margin-bottom: 16px;
  > div {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: start;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;


export const Box = styled.div`
  width: 100%;
  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 5px;

  }
`;