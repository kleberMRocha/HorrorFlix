import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--darkBlue);
  border-top: 2px solid var(--dark);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const ImgFooter = styled.img`
  height: 60px;
`;