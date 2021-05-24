import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-family: 'Bebas Neue';
  font-size: 64px;
  letter-spacing: 3px;
`;

type HeadingProps = {
  children: string;
};

const Heading = ({ children }: HeadingProps) => (
  <StyledHeading>{children}</StyledHeading>
);

export default Heading;
