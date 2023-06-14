import styled from 'styled-components/macro';

export const HeadImage = styled.div`
  background-image: url('https://i.postimg.cc/BnqwFZXs/pexels-daniel-frank-1111766.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  height: 400px;
  margin: 0;
`;

export const MH1 = styled.h1`
  padding: 0;
  margin: 40px 20px 0;
  color: #414142;
  font-size: 34px;
  font-weight: 5s00;
`
export const MH2 = styled.h3`
  margin: 12px 0 0 20px;
  color: #414142;
  font-size: 24px;
  font-weight: 400;
`
export const MH3 = styled.h3`
  margin: 20px 0 0 20px;
  padding: 0;
  color: #414142;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;

`
export const UsText = styled.p`
 padding: 0 2rem 1rem 0;
 margin: 20px;
 color: var(--text);
 font-size: 14px;
 font-weight: 300;
`
export const AgentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const AgentImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px;

  @media (min-width: 375px) {
    width: 42%;
  }
  @media (min-width: 768px) {
    width: 18%;
  }
`
