import styled from 'styled-components/macro';

export const ContactCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 30px;
`;

export const ContactContainter = styled.div`
    display: flex;
    flex-direction: column;
    margin: 70px 30px;
`;

export const ContactH1 = styled.h1`
  margin: 90px 30px 0;
  color: var(--text);
  font-size: 34px;
  font-weight: 200;
  text-transform: uppercase;
  `

export const ContactIntro = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: var(--text);
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