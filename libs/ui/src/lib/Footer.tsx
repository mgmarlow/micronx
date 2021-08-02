import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledP = styled.p`
  color: red;
`;

export function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <StyledP>micronx, a monorepo microfrontend demo.</StyledP>
      </div>
    </footer>
  );
}

export default Footer;
