import styled, { keyframes } from 'styled-components/macro';

export const ObjectMainImg = styled.div`
 position: static;
 width: 100%;
 height: 100vh;
`;

export const ObjectImg = styled.img`
  object-fit: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin: 0;
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const OverH3 = styled.h3`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 38px;
  font-weight: 200;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards;

  @media (max-width: 636px) {
    top: 44.5%;
    font-size: 30px;
  }
`;

export const OverH4 = styled.h4`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards;
`;

export const OverH5 = styled.h5`
  position: absolute;
  top: 51.3%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards;
`;

export const ExtraImg = styled.img`
  width: 100vw;
  margin: 0;
`;

export const ObjectInfo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const InfoDescription = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
margin: 20px;
width: 100%;

@media (min-width: 768px) {
    width: 360px;
    margin-right: 0;
  }

@media (min-width: 1024px) {
    width: 480px;
    margin-right: 10px;
}
`;

export const ItemDescription = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
color: var(--text);
margin-right: 10px;

@media (min-width: 768px) {
    margin-right: 30px;
  }

@media (min-width: 1024px) {
    margin-right: 40px;
}
`;

export const H6 = styled.h6`
    color: var(--text);
    font-size: 16px;
    font-weight: 700;
    margin: 0;
`;

export const MainText = styled.p`
    color: var(--text);
    font-size: 16px;
    font-weight: 300;
    margin: 10px 0 20px 0;
`;

export const Label = styled.strong`
font-size: 15px;
font-weight: 500;
`;

export const Value = styled.span`
  font-size: 15px;
  font-weight: 300;
`;

export const AgentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 328px;
  gap:10px;
  border: solid 1px var(--bg-grey);
  margin: 15px 0;
  
  `;

export const SmallRealtor = styled.img`
  width: 80px;
  border: solid 4px #E6E6E8;
  margin: 10px;
`;

export const Headline = styled.h2`
  color: var(--text);
  font-size: 20px;
  font-weight: 200;
  text-transform: uppercase;
  margin: 0;
`