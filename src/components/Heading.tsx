import styled from 'styled-components';

const StyledPrimaryHeading = styled.h1`
  font-family: 'Bebas Neue';
  font-size: 64px;
  letter-spacing: 3px;
  color: #000000
`;

const StyledSecondaryHeading = styled(StyledPrimaryHeading)`
  font-size: 32px;
  color: #2b2b2b;
`;

type HeadingProps = {
  children: string;
};

const PrimaryHeading = ({ children }: HeadingProps) => (
  <StyledPrimaryHeading>{children}</StyledPrimaryHeading>
);

const SecondaryHeading = ({ children }: HeadingProps) => (
  <StyledSecondaryHeading>{children}</StyledSecondaryHeading>
);

export {
  PrimaryHeading,
  SecondaryHeading,
};
