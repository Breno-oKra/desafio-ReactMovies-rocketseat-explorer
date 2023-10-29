import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
`;
export const Links = styled.ul`
  list-style: none;
  > li {
    margin-top: 12px;
    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  max-width: 950px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: start;
  > a {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 24px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
  > div:nth-child(2) {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    > h2 {
      font-size: 36px;
      font-weight: 500;
    }
  }
  > footer {
    width: 100%;
    display: flex;
    margin-bottom: 40px;
  }
`;
export const Profile = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 8px;
  margin-bottom: 40px;
  > img {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  > span {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;

    > svg {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`;
