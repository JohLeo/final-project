import styled from 'styled-components/macro';

export const ContactPage = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
     margin-top: 100px;
     align-items: center;
  }
`;

export const ContactCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 10px 0 10px 10px;

    @media (min-width: 426px) {
    margin: 30px;
  }
`;

export const ContactContainter = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px 10px;

    @media (min-width: 426px) {
    margin: 70px 30px;
  }
`;

export const ContactH1 = styled.h1`
  margin: 90px 10px 0;
  color: var(--text);
  font-size: 34px;
  font-weight: 200;
  text-transform: uppercase;

  @media (min-width: 426px) {
    margin: 90px 30px 0;
  }
  `

export const ProfileImg = styled.img`
  max-width: 70px;
  height: auto;
  border-style: solid;
  border-width: 5px 5px 14px 5px; 
  border-color: #E6E6E8;
  margin: 10px 0;

  @media (min-width: 426px) {
    max-width: 150px;
  }
`;

export const ContactIntro = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: var(--text);
    max-width: 500px;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  right: 1rem;
  margin: 0;
  color: var(--text);
`;

export const Icons = styled.a`
  margin-top: 10px;
  font-size: 20px;
  color: var(--icons);
  text-decoration: none;

    &:hover {
      color: var(--bg-grey);
    }

`;