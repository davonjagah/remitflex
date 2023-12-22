import styled from "styled-components";

export const Header = styled.div`
  width: 40%;
  margin: auto;
`;
export const BodyText = styled.div`
  display: flex;
  margin-left: 2rem;
  @media screen and (max-width: 450px) {
    margin-left: 1.2rem;
  }
`;
export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
  }

  div {
    display: flex;
    width: 100%;
    gap: 1rem;

    img {
      width: 95.698px;
      height: 95.698px;
      flex-shrink: 0;
      @media screen and (max-width: 460px) {
        width: 65.698px;
        height: 65.698px;
      }
      @media screen and (max-width: 425px) {
        width: 45.698px;
        height: 45.698px;
      }
    }
  }
`;
export const ImageDiv = styled.img`
  width: 130%;
  background-size: cover;
`;
export const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 80%;
  flex-direction: column;
  @media screen and (max-width: 450px) {
    gap: 0.4rem;
  }
  span {
    color: #545454;
    text-align: center;
    margin: auto;

    font-family: Sora-Regular, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 175%;
  }
  p {
    color: #545454;
    width: 20rem;
    font-family: Sora-Regular, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 175%;
  }
`;
export const SecondTitle = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 600;
  font-family: var(--font-family-nista);
  @media screen and (max-width: 460px) {
    font-size: 14px;
  }
`;
export const Title = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 600;
  font-family: var(--font-family-nista);
  @media screen and (max-width: 460px) {
    font-size: 14px;
  }
`;
export const MainText = styled.p`
  color: black;
  font-family: var(--font-family-geom);

  padding-top: 2rem;
  font-size: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 100%;
`;
// export const ButtonWrap = styled.div`
//     // width: 15rem;

// `
export const MidSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  img {
    margin-top: 1rem;
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
  }
`;
